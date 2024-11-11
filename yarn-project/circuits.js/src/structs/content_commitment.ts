import { Fr } from '@aztec/foundation/fields';
import { schemas } from '@aztec/foundation/schemas';
import { BufferReader, FieldReader, serializeToBuffer } from '@aztec/foundation/serialize';

import { z } from 'zod';

import { CONTENT_COMMITMENT_LENGTH } from '../constants.gen.js';

export const NUM_BYTES_PER_SHA256 = 32;

export class ContentCommitment {
  constructor(public numTxs: Fr, public blobHash: Buffer, public inHash: Buffer, public outHash: Buffer) {
    // NB: we do not calculate blobHash in the circuit, but we still truncate it so it fits in a field
    if (blobHash.length !== NUM_BYTES_PER_SHA256) {
      throw new Error(`blobHash buffer must be ${NUM_BYTES_PER_SHA256} bytes`);
    }
    if (blobHash[0] !== 0) {
      throw new Error(`blobHash buffer should be truncated and left padded`);
    }
    if (inHash.length !== NUM_BYTES_PER_SHA256) {
      throw new Error(`inHash buffer must be ${NUM_BYTES_PER_SHA256} bytes`);
    }
    if (inHash[0] !== 0) {
      throw new Error(`inHash buffer should be truncated and left padded`);
    }
    if (outHash.length !== NUM_BYTES_PER_SHA256) {
      throw new Error(`outHash buffer must be ${NUM_BYTES_PER_SHA256} bytes`);
    }
    if (outHash[0] !== 0) {
      throw new Error(`outHash buffer should be truncated and left padded`);
    }
  }

  static get schema() {
    return z
      .object({
        numTxs: schemas.Fr,
        txsEffectsHash: schemas.BufferHex,
        inHash: schemas.BufferHex,
        outHash: schemas.BufferHex,
      })
      .transform(
        ({ numTxs, txsEffectsHash, inHash, outHash }) => new ContentCommitment(numTxs, txsEffectsHash, inHash, outHash),
      );
  }

  toJSON() {
    return {
      numTxs: this.numTxs,
      txsEffectsHash: this.txsEffectsHash.toString('hex'),
      inHash: this.inHash.toString('hex'),
      outHash: this.outHash.toString('hex'),
    };
  }

  getSize() {
    return this.toBuffer().length;
  }

  toBuffer() {
    return serializeToBuffer(this.numTxs, this.blobHash, this.inHash, this.outHash);
  }

  toFields(): Fr[] {
    const serialized = [
      this.numTxs,
      Fr.fromBuffer(this.blobHash),
      Fr.fromBuffer(this.inHash),
      Fr.fromBuffer(this.outHash),
    ];
    if (serialized.length !== CONTENT_COMMITMENT_LENGTH) {
      throw new Error(
        `Expected content commitment to have ${CONTENT_COMMITMENT_LENGTH} fields, but it has ${serialized.length} fields`,
      );
    }
    return serialized;
  }

  static fromBuffer(buffer: Buffer | BufferReader): ContentCommitment {
    const reader = BufferReader.asReader(buffer);

    return new ContentCommitment(
      reader.readObject(Fr),
      reader.readBytes(NUM_BYTES_PER_SHA256),
      reader.readBytes(NUM_BYTES_PER_SHA256),
      reader.readBytes(NUM_BYTES_PER_SHA256),
    );
  }

  static fromFields(fields: Fr[] | FieldReader): ContentCommitment {
    const reader = FieldReader.asReader(fields);
    return new ContentCommitment(
      reader.readField(),
      reader.readField().toBuffer(),
      reader.readField().toBuffer(),
      reader.readField().toBuffer(),
    );
  }

  static empty(): ContentCommitment {
    return new ContentCommitment(
      Fr.zero(),
      Buffer.alloc(NUM_BYTES_PER_SHA256),
      Buffer.alloc(NUM_BYTES_PER_SHA256),
      Buffer.alloc(NUM_BYTES_PER_SHA256),
    );
  }

  isEmpty(): boolean {
    return (
      this.numTxs.isZero() &&
      this.blobHash.equals(Buffer.alloc(NUM_BYTES_PER_SHA256)) &&
      this.inHash.equals(Buffer.alloc(NUM_BYTES_PER_SHA256)) &&
      this.outHash.equals(Buffer.alloc(NUM_BYTES_PER_SHA256))
    );
  }

  public toString(): string {
    return this.toBuffer().toString('hex');
  }

  static fromString(str: string): ContentCommitment {
    const buffer = Buffer.from(str.replace(/^0x/i, ''), 'hex');
    return ContentCommitment.fromBuffer(buffer);
  }

  public equals(other: this): boolean {
    return (
      this.inHash.equals(other.inHash) &&
      this.outHash.equals(other.outHash) &&
      this.numTxs.equals(other.numTxs) &&
      this.blobHash.equals(other.blobHash)
    );
  }
}
