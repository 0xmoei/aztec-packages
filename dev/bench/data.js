window.BENCHMARK_DATA = {
  "lastUpdate": 1727106693694,
  "repoUrl": "https://github.com/AztecProtocol/aztec-packages",
  "entries": {
    "C++ Benchmark": [
      {
        "commit": {
          "author": {
            "email": "fcarreiro@users.noreply.github.com",
            "name": "Facundo",
            "username": "fcarreiro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8de1f2a942024aad955ea0f318cb044e3692b7fc",
          "message": "feat(avm)!: variants for binary operations (#8473)\n\nGets us another ~30% bytecode size gain.\n\nI still have to remove tags.",
          "timestamp": "2024-09-10T17:22:04+01:00",
          "tree_id": "31da4d3576d7643b021f13930a50b8f8e69e1950",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/8de1f2a942024aad955ea0f318cb044e3692b7fc"
        },
        "date": 1725985966098,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13362.828094000008,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10258.320415000002 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5094.068345999986,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4664.127823000001 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 39233.803472,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 39233803000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14682.040589999999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14682041000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3661581634,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3661581634 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 146749294,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 146749294 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 2993717784,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2993717784 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 119752968,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 119752968 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "adam.domurad@gmail.com",
            "name": "ludamad",
            "username": "ludamad"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "372f23ce0aa44a3aa6e1ef2f864df303a3229e6b",
          "message": "feat(bb): towards reduced polynomial memory usage (#7990)\n\nSee https://hackmd.io/MDcSYZtESay9rI6-Atd0fg for motivation\r\n\r\nAnother pass on moving polynomials to a form where 'islands' of\r\nnon-zeroes are supported.\r\n- introduce a new form of shifts: we start unshifted polynomials at\r\nstart_index() == 1 and for shifted polynomials simply shallow copy them\r\nwith start_index() == 0. Note more non-trivial copying of polynomials\r\n(heard whispering of this with AVM, or perhaps if we had prover-builder\r\nsharing) would need more flexibility in the array backing\r\n- ensure shifted polynomials are allocated as above\r\n- change operator[] to be .at() everywhere, which is arbitrarily chosen\r\nto be the mutable operator. This is to keep operator[] able to read\r\noutside of strictly-defined bounds as before. For any mutable accesses,\r\nwe use at().\r\n- adapt the code to the new shift scheme, this took the majority of the\r\ntime\r\n- try out the new abbreviated scheme with \r\n- PolynomialSpan now replaces std::span in a few cases, namely in\r\ncomputing commitments. This includes a start index offset. When\r\ncomputing MSMs this is natural as we just offset the SRS index\r\n(representing the exponent) by start_index, which follows as\r\nconceptually we have 0 values before start_index.\r\n\r\n---------\r\n\r\nCo-authored-by: ludamad <adam@aztecprotocol.com>",
          "timestamp": "2024-09-10T13:52:52-04:00",
          "tree_id": "c20664264e2aa4825e8563b878d3adada49c2198",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/372f23ce0aa44a3aa6e1ef2f864df303a3229e6b"
        },
        "date": 1725991912656,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13512.246870000014,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10334.680747000002 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5272.830596999995,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4857.368219000001 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 40711.050929,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 40711050000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14691.888535,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14691890000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3679026130,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3679026130 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 146540180,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 146540180 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3036972834,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3036972834 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 123005064,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 123005064 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "adam.domurad@gmail.com",
            "name": "ludamad",
            "username": "ludamad"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ac88f30808199c2625f889671f2767c3667becb5",
          "message": "chore(bb): remove poly downsizing, other fast-follow from structured polys (#8475)",
          "timestamp": "2024-09-10T14:42:26-04:00",
          "tree_id": "9c03d2f82a94d0ecabf85090190ea35a462f06da",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/ac88f30808199c2625f889671f2767c3667becb5"
        },
        "date": 1725994473738,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13379.50447899999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10265.542943 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5133.077916000005,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4693.577666000001 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 40205.808839000005,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 40205809000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14676.619571000001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14676620000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3683537318,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3683537318 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 147689309,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 147689309 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3033627965,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3033627965 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 122746452,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 122746452 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "blorktronics@gmail.com",
            "name": "Zachary James Williamson",
            "username": "zac-williamson"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d5b239745178d1ce4eb8b8d32fa4b366c13c3c94",
          "message": "feat: (bb) 128-bit challenges (#8406)\n\nThis PR modifies our Transcript class to achieve the following:\r\n\r\nevery time a hash function is used to generate challenges, the output is\r\nsplit into two 128-bit field elements to generate 2 challenges per hash\r\n\r\nThis change gives us the following benefits:\r\n\r\n1. the amount of hashing required to fold/verifier proofs is reduced\r\n2. where challenges map to Verifier scalar multiplications, those scalar\r\nmuls are now half-width and can be more efficiently evaluated (requires\r\nadditional code to support)\r\n\r\nCloses https://github.com/AztecProtocol/barretenberg/issues/741.\r\n\r\n---------\r\n\r\nCo-authored-by: lucasxia01 <lucasxia01@gmail.com>\r\nCo-authored-by: Maxim Vezenov <mvezenov@gmail.com>",
          "timestamp": "2024-09-10T19:10:30Z",
          "tree_id": "6b7977d741e52bd5d82a58985d61e262cfdab95a",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/d5b239745178d1ce4eb8b8d32fa4b366c13c3c94"
        },
        "date": 1725996445068,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13127.101986999975,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10069.191004 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5076.867936999989,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4691.005517 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 39334.764146,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 39334764000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14744.864604000002,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14744865000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3624839788,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3624839788 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 145737530,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 145737530 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 2958358087,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2958358087 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 122646242,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 122646242 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49558828+AztecBot@users.noreply.github.com",
            "name": "Aztec Bot",
            "username": "AztecBot"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "64e7cf3f53a00bb3746ea7e72ffe2b95722344c4",
          "message": "chore(master): Release 0.54.0 (#8449)\n\n:robot: I have created a release *beep* *boop*\r\n---\r\n\r\n\r\n<details><summary>aztec-package: 0.54.0</summary>\r\n\r\n##\r\n[0.54.0](https://github.com/AztecProtocol/aztec-packages/compare/aztec-package-v0.53.0...aztec-package-v0.54.0)\r\n(2024-09-10)\r\n\r\n\r\n### Features\r\n\r\n* Archiver fork block num\r\n([#8425](https://github.com/AztecProtocol/aztec-packages/issues/8425))\r\n([a9f2364](https://github.com/AztecProtocol/aztec-packages/commit/a9f2364264e5cba4d01f09ef18801dd5ff39ae87))\r\n\r\n\r\n### Miscellaneous\r\n\r\n* Merge devnet to master\r\n([#8472](https://github.com/AztecProtocol/aztec-packages/issues/8472))\r\n([26706e9](https://github.com/AztecProtocol/aztec-packages/commit/26706e9d4339e6cf7603b6c86f1e7a1d3942bd63))\r\n</details>\r\n\r\n<details><summary>barretenberg.js: 0.54.0</summary>\r\n\r\n##\r\n[0.54.0](https://github.com/AztecProtocol/aztec-packages/compare/barretenberg.js-v0.53.0...barretenberg.js-v0.54.0)\r\n(2024-09-10)\r\n\r\n\r\n### Miscellaneous\r\n\r\n* **barretenberg.js:** Synchronize aztec-packages versions\r\n</details>\r\n\r\n<details><summary>aztec-packages: 0.54.0</summary>\r\n\r\n##\r\n[0.54.0](https://github.com/AztecProtocol/aztec-packages/compare/aztec-packages-v0.53.0...aztec-packages-v0.54.0)\r\n(2024-09-10)\r\n\r\n\r\n### ⚠ BREAKING CHANGES\r\n\r\n* **avm:** variants for binary operations\r\n([#8473](https://github.com/AztecProtocol/aztec-packages/issues/8473))\r\n* **avm:** make JUMP(I) 16-bit\r\n([#8443](https://github.com/AztecProtocol/aztec-packages/issues/8443))\r\n* **avm:** variants for SET opcode\r\n([#8441](https://github.com/AztecProtocol/aztec-packages/issues/8441))\r\n* **avm:** variants for MOV opcode\r\n([#8440](https://github.com/AztecProtocol/aztec-packages/issues/8440))\r\n\r\n### Features\r\n\r\n* (bb) 128-bit challenges\r\n([#8406](https://github.com/AztecProtocol/aztec-packages/issues/8406))\r\n([d5b2397](https://github.com/AztecProtocol/aztec-packages/commit/d5b239745178d1ce4eb8b8d32fa4b366c13c3c94))\r\n* `Module::add_item` (https://github.com/noir-lang/noir/pull/5947)\r\n([8ac81b1](https://github.com/AztecProtocol/aztec-packages/commit/8ac81b15cd2a3b57493bfbfe444086deac8f3dc8))\r\n* Add `Expr::as_let` (https://github.com/noir-lang/noir/pull/5964)\r\n([8ac81b1](https://github.com/AztecProtocol/aztec-packages/commit/8ac81b15cd2a3b57493bfbfe444086deac8f3dc8))\r\n* Add `FunctionDefinition::module` and `StructDefinition::module`\r\n(https://github.com/noir-lang/noir/pull/5956)\r\n([8ac81b1](https://github.com/AztecProtocol/aztec-packages/commit/8ac81b15cd2a3b57493bfbfe444086deac8f3dc8))\r\n* Add `FunctionDefinition` methods `is_unconstrained` and\r\n`set_unconstrained` (https://github.com/noir-lang/noir/pull/5962)\r\n([8ac81b1](https://github.com/AztecProtocol/aztec-packages/commit/8ac81b15cd2a3b57493bfbfe444086deac8f3dc8))\r\n* Add `StructDefinition::add_generic`\r\n(https://github.com/noir-lang/noir/pull/5961)\r\n([8ac81b1](https://github.com/AztecProtocol/aztec-packages/commit/8ac81b15cd2a3b57493bfbfe444086deac8f3dc8))\r\n* Add `StructDefinition::name`\r\n(https://github.com/noir-lang/noir/pull/5960)\r\n([8ac81b1](https://github.com/AztecProtocol/aztec-packages/commit/8ac81b15cd2a3b57493bfbfe444086deac8f3dc8))\r\n* Add a `panic` method to the stdlib\r\n(https://github.com/noir-lang/noir/pull/5966)\r\n([8ac81b1](https://github.com/AztecProtocol/aztec-packages/commit/8ac81b15cd2a3b57493bfbfe444086deac8f3dc8))\r\n* Archiver fork block num\r\n([#8425](https://github.com/AztecProtocol/aztec-packages/issues/8425))\r\n([a9f2364](https://github.com/AztecProtocol/aztec-packages/commit/a9f2364264e5cba4d01f09ef18801dd5ff39ae87))\r\n* Arithmetic Generics (https://github.com/noir-lang/noir/pull/5950)\r\n([8ac81b1](https://github.com/AztecProtocol/aztec-packages/commit/8ac81b15cd2a3b57493bfbfe444086deac8f3dc8))\r\n* **avm-transpiler:** Optionally count opcode types\r\n([#8439](https://github.com/AztecProtocol/aztec-packages/issues/8439))\r\n([21c06b5](https://github.com/AztecProtocol/aztec-packages/commit/21c06b5c497cea2ec1a0be457204508bc39516a6))\r\n* **avm/public:** User space PublicContext::get_args_hash\r\n([#8292](https://github.com/AztecProtocol/aztec-packages/issues/8292))\r\n([56ce16a](https://github.com/AztecProtocol/aztec-packages/commit/56ce16a104476e070a627a5f0c5dcb3425691bcd))\r\n* **avm:** DSL integration of AVM recursive verifier\r\n([#8405](https://github.com/AztecProtocol/aztec-packages/issues/8405))\r\n([467120e](https://github.com/AztecProtocol/aztec-packages/commit/467120e5a95de267910c2f95b65dcb62c60f995d)),\r\ncloses\r\n[#8285](https://github.com/AztecProtocol/aztec-packages/issues/8285)\r\n* **avm:** Make JUMP(I) 16-bit\r\n([#8443](https://github.com/AztecProtocol/aztec-packages/issues/8443))\r\n([5bb38b1](https://github.com/AztecProtocol/aztec-packages/commit/5bb38b1692469520f29a1c85bc381c1ca9eb4032))\r\n* **avm:** Variants for binary operations\r\n([#8473](https://github.com/AztecProtocol/aztec-packages/issues/8473))\r\n([8de1f2a](https://github.com/AztecProtocol/aztec-packages/commit/8de1f2a942024aad955ea0f318cb044e3692b7fc))\r\n* **avm:** Variants for MOV opcode\r\n([#8440](https://github.com/AztecProtocol/aztec-packages/issues/8440))\r\n([5b27fbc](https://github.com/AztecProtocol/aztec-packages/commit/5b27fbca982442251a350d6571bdd007b715d575))\r\n* **avm:** Variants for SET opcode\r\n([#8441](https://github.com/AztecProtocol/aztec-packages/issues/8441))\r\n([dc43306](https://github.com/AztecProtocol/aztec-packages/commit/dc433064391b2ac93bca6b838adac271fbd28991))\r\n* **bb:** Towards reduced polynomial memory usage\r\n([#7990](https://github.com/AztecProtocol/aztec-packages/issues/7990))\r\n([372f23c](https://github.com/AztecProtocol/aztec-packages/commit/372f23ce0aa44a3aa6e1ef2f864df303a3229e6b))\r\n* Let `nargo` and LSP work well in the stdlib\r\n(https://github.com/noir-lang/noir/pull/5969)\r\n([8ac81b1](https://github.com/AztecProtocol/aztec-packages/commit/8ac81b15cd2a3b57493bfbfe444086deac8f3dc8))\r\n* LSP autocompletion for attributes\r\n(https://github.com/noir-lang/noir/pull/5963)\r\n([8ac81b1](https://github.com/AztecProtocol/aztec-packages/commit/8ac81b15cd2a3b57493bfbfe444086deac8f3dc8))\r\n* LSP now suggests self fields and methods\r\n(https://github.com/noir-lang/noir/pull/5955)\r\n([8ac81b1](https://github.com/AztecProtocol/aztec-packages/commit/8ac81b15cd2a3b57493bfbfe444086deac8f3dc8))\r\n* Show doc comments in LSP (https://github.com/noir-lang/noir/pull/5968)\r\n([8ac81b1](https://github.com/AztecProtocol/aztec-packages/commit/8ac81b15cd2a3b57493bfbfe444086deac8f3dc8))\r\n\r\n\r\n### Bug Fixes\r\n\r\n* Add re-exports back\r\n([#8453](https://github.com/AztecProtocol/aztec-packages/issues/8453))\r\n([b6cab90](https://github.com/AztecProtocol/aztec-packages/commit/b6cab90428be1b3576cbfedf17ab287fd9a659c8))\r\n* **avm:** Full proving kernel fix\r\n([#8468](https://github.com/AztecProtocol/aztec-packages/issues/8468))\r\n([684d962](https://github.com/AztecProtocol/aztec-packages/commit/684d96271669116380facfa48db6cba3a5d945de))\r\n* **bb:** Mac release\r\n([#8450](https://github.com/AztecProtocol/aztec-packages/issues/8450))\r\n([1b3f914](https://github.com/AztecProtocol/aztec-packages/commit/1b3f914fc069ec84fbd93621eb369128c3ba0dc5))\r\n* **docs:** Some docs updates\r\n([#8412](https://github.com/AztecProtocol/aztec-packages/issues/8412))\r\n([ad73f30](https://github.com/AztecProtocol/aztec-packages/commit/ad73f304147027c8720b9720d92d2d8c409f599d))\r\n* Error when `quote` is used in runtime code\r\n(https://github.com/noir-lang/noir/pull/5978)\r\n([8ac81b1](https://github.com/AztecProtocol/aztec-packages/commit/8ac81b15cd2a3b57493bfbfe444086deac8f3dc8))\r\n* Error when comptime functions are used in runtime code\r\n(https://github.com/noir-lang/noir/pull/5976)\r\n([8ac81b1](https://github.com/AztecProtocol/aztec-packages/commit/8ac81b15cd2a3b57493bfbfe444086deac8f3dc8))\r\n* Fmt\r\n([#8454](https://github.com/AztecProtocol/aztec-packages/issues/8454))\r\n([34b4a8a](https://github.com/AztecProtocol/aztec-packages/commit/34b4a8a012d373a0f2d2f10252e29d8201b8c003))\r\n* Guesstimate gas for propose\r\n([#8445](https://github.com/AztecProtocol/aztec-packages/issues/8445))\r\n([bff0338](https://github.com/AztecProtocol/aztec-packages/commit/bff03382fc5f4be00ba0481564416f643b864f40))\r\n* Let `derive(Eq)` work for empty structs\r\n(https://github.com/noir-lang/noir/pull/5965)\r\n([8ac81b1](https://github.com/AztecProtocol/aztec-packages/commit/8ac81b15cd2a3b57493bfbfe444086deac8f3dc8))\r\n* LSP document symbol didn't work for primitive impls\r\n(https://github.com/noir-lang/noir/pull/5970)\r\n([8ac81b1](https://github.com/AztecProtocol/aztec-packages/commit/8ac81b15cd2a3b57493bfbfe444086deac8f3dc8))\r\n* **mem2reg:** Handle aliases better when setting a known value for a\r\nload (https://github.com/noir-lang/noir/pull/5959)\r\n([8ac81b1](https://github.com/AztecProtocol/aztec-packages/commit/8ac81b15cd2a3b57493bfbfe444086deac8f3dc8))\r\n* **mem2reg:** Handle aliases in function last store cleanup and\r\nadditional alias unit test (https://github.com/noir-lang/noir/pull/5967)\r\n([8ac81b1](https://github.com/AztecProtocol/aztec-packages/commit/8ac81b15cd2a3b57493bfbfe444086deac8f3dc8))\r\n* Public data reads and writes verification\r\n([#8296](https://github.com/AztecProtocol/aztec-packages/issues/8296))\r\n([ae86347](https://github.com/AztecProtocol/aztec-packages/commit/ae863471fed30ea3382aea8223d7ddf8e9eef4ee))\r\n* Restrict keccak256_injective test input to 8 bits\r\n(https://github.com/noir-lang/noir/pull/5977)\r\n([8ac81b1](https://github.com/AztecProtocol/aztec-packages/commit/8ac81b15cd2a3b57493bfbfe444086deac8f3dc8))\r\n* Suggest trait attributes in LSP\r\n(https://github.com/noir-lang/noir/pull/5972)\r\n([8ac81b1](https://github.com/AztecProtocol/aztec-packages/commit/8ac81b15cd2a3b57493bfbfe444086deac8f3dc8))\r\n\r\n\r\n### Miscellaneous\r\n\r\n* **bb:** Remove poly downsizing, other fast-follow from structured\r\npolys\r\n([#8475](https://github.com/AztecProtocol/aztec-packages/issues/8475))\r\n([ac88f30](https://github.com/AztecProtocol/aztec-packages/commit/ac88f30808199c2625f889671f2767c3667becb5))\r\n* **ci:** Rerun ci when ready for review + don't allow draft merge\r\n([#8456](https://github.com/AztecProtocol/aztec-packages/issues/8456))\r\n([ede16d3](https://github.com/AztecProtocol/aztec-packages/commit/ede16d31d99eb633630b037dc668e7c9b21ac769))\r\n* **docs:** Update box readme, remove duplicated features, added box\r\ninstall to the docs\r\n([#8254](https://github.com/AztecProtocol/aztec-packages/issues/8254))\r\n([b747ac1](https://github.com/AztecProtocol/aztec-packages/commit/b747ac192bf63b2395c464f5b012ded9a3412846))\r\n* Document BoundedVec (https://github.com/noir-lang/noir/pull/5974)\r\n([8ac81b1](https://github.com/AztecProtocol/aztec-packages/commit/8ac81b15cd2a3b57493bfbfe444086deac8f3dc8))\r\n* Document HashMap (https://github.com/noir-lang/noir/pull/5984)\r\n([8ac81b1](https://github.com/AztecProtocol/aztec-packages/commit/8ac81b15cd2a3b57493bfbfe444086deac8f3dc8))\r\n* Merge devnet to master\r\n([#8472](https://github.com/AztecProtocol/aztec-packages/issues/8472))\r\n([26706e9](https://github.com/AztecProtocol/aztec-packages/commit/26706e9d4339e6cf7603b6c86f1e7a1d3942bd63))\r\n* Remove 3 unused functions warnings in the stdlib\r\n(https://github.com/noir-lang/noir/pull/5973)\r\n([8ac81b1](https://github.com/AztecProtocol/aztec-packages/commit/8ac81b15cd2a3b57493bfbfe444086deac8f3dc8))\r\n* Remove warnings from protocol circuits\r\n([#8420](https://github.com/AztecProtocol/aztec-packages/issues/8420))\r\n([c4dbcab](https://github.com/AztecProtocol/aztec-packages/commit/c4dbcabf48e930b2c541a1d98d8c1e3807f4f4fc))\r\n* Rename files relating to what were \"instances\"\r\n([#8383](https://github.com/AztecProtocol/aztec-packages/issues/8383))\r\n([a934e85](https://github.com/AztecProtocol/aztec-packages/commit/a934e85b416a029ae057e0e70277401fb7cfe4b9))\r\n* Replace relative paths to noir-protocol-circuits\r\n([1c43bae](https://github.com/AztecProtocol/aztec-packages/commit/1c43bae21fbe909eff62d1f7ebb5789fbfa8bef3))\r\n</details>\r\n\r\n<details><summary>barretenberg: 0.54.0</summary>\r\n\r\n##\r\n[0.54.0](https://github.com/AztecProtocol/aztec-packages/compare/barretenberg-v0.53.0...barretenberg-v0.54.0)\r\n(2024-09-10)\r\n\r\n\r\n### ⚠ BREAKING CHANGES\r\n\r\n* **avm:** variants for binary operations\r\n([#8473](https://github.com/AztecProtocol/aztec-packages/issues/8473))\r\n* **avm:** make JUMP(I) 16-bit\r\n([#8443](https://github.com/AztecProtocol/aztec-packages/issues/8443))\r\n* **avm:** variants for SET opcode\r\n([#8441](https://github.com/AztecProtocol/aztec-packages/issues/8441))\r\n* **avm:** variants for MOV opcode\r\n([#8440](https://github.com/AztecProtocol/aztec-packages/issues/8440))\r\n\r\n### Features\r\n\r\n* (bb) 128-bit challenges\r\n([#8406](https://github.com/AztecProtocol/aztec-packages/issues/8406))\r\n([d5b2397](https://github.com/AztecProtocol/aztec-packages/commit/d5b239745178d1ce4eb8b8d32fa4b366c13c3c94))\r\n* **avm:** DSL integration of AVM recursive verifier\r\n([#8405](https://github.com/AztecProtocol/aztec-packages/issues/8405))\r\n([467120e](https://github.com/AztecProtocol/aztec-packages/commit/467120e5a95de267910c2f95b65dcb62c60f995d)),\r\ncloses\r\n[#8285](https://github.com/AztecProtocol/aztec-packages/issues/8285)\r\n* **avm:** Make JUMP(I) 16-bit\r\n([#8443](https://github.com/AztecProtocol/aztec-packages/issues/8443))\r\n([5bb38b1](https://github.com/AztecProtocol/aztec-packages/commit/5bb38b1692469520f29a1c85bc381c1ca9eb4032))\r\n* **avm:** Variants for binary operations\r\n([#8473](https://github.com/AztecProtocol/aztec-packages/issues/8473))\r\n([8de1f2a](https://github.com/AztecProtocol/aztec-packages/commit/8de1f2a942024aad955ea0f318cb044e3692b7fc))\r\n* **avm:** Variants for MOV opcode\r\n([#8440](https://github.com/AztecProtocol/aztec-packages/issues/8440))\r\n([5b27fbc](https://github.com/AztecProtocol/aztec-packages/commit/5b27fbca982442251a350d6571bdd007b715d575))\r\n* **avm:** Variants for SET opcode\r\n([#8441](https://github.com/AztecProtocol/aztec-packages/issues/8441))\r\n([dc43306](https://github.com/AztecProtocol/aztec-packages/commit/dc433064391b2ac93bca6b838adac271fbd28991))\r\n* **bb:** Towards reduced polynomial memory usage\r\n([#7990](https://github.com/AztecProtocol/aztec-packages/issues/7990))\r\n([372f23c](https://github.com/AztecProtocol/aztec-packages/commit/372f23ce0aa44a3aa6e1ef2f864df303a3229e6b))\r\n\r\n\r\n### Bug Fixes\r\n\r\n* **avm:** Full proving kernel fix\r\n([#8468](https://github.com/AztecProtocol/aztec-packages/issues/8468))\r\n([684d962](https://github.com/AztecProtocol/aztec-packages/commit/684d96271669116380facfa48db6cba3a5d945de))\r\n* **bb:** Mac release\r\n([#8450](https://github.com/AztecProtocol/aztec-packages/issues/8450))\r\n([1b3f914](https://github.com/AztecProtocol/aztec-packages/commit/1b3f914fc069ec84fbd93621eb369128c3ba0dc5))\r\n\r\n\r\n### Miscellaneous\r\n\r\n* **bb:** Remove poly downsizing, other fast-follow from structured\r\npolys\r\n([#8475](https://github.com/AztecProtocol/aztec-packages/issues/8475))\r\n([ac88f30](https://github.com/AztecProtocol/aztec-packages/commit/ac88f30808199c2625f889671f2767c3667becb5))\r\n* Rename files relating to what were \"instances\"\r\n([#8383](https://github.com/AztecProtocol/aztec-packages/issues/8383))\r\n([a934e85](https://github.com/AztecProtocol/aztec-packages/commit/a934e85b416a029ae057e0e70277401fb7cfe4b9))\r\n</details>\r\n\r\n---\r\nThis PR was generated with [Release\r\nPlease](https://github.com/googleapis/release-please). See\r\n[documentation](https://github.com/googleapis/release-please#release-please).",
          "timestamp": "2024-09-10T22:32:16+01:00",
          "tree_id": "6b3e78234f7eded151a54c83c3a2726390d27362",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/64e7cf3f53a00bb3746ea7e72ffe2b95722344c4"
        },
        "date": 1726004969754,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13234.332359999997,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10116.729134 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5144.620397999986,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4744.674770000001 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 39485.42739900001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 39485427000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14665.673469999998,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14665674000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3650480769,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3650480769 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 145845825,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 145845825 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 2966036610,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2966036610 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 120525161,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 120525161 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98505400+ledwards2225@users.noreply.github.com",
            "name": "ledwards2225",
            "username": "ledwards2225"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "11dc8ff185d74e6e5bc51e85d6bcd6577ac83161",
          "message": "feat: Verification key stuff (#8431)\n\nThe previous\r\n[PR](https://github.com/AztecProtocol/aztec-packages/pull/8230) in this\r\nseries set up the basic infrastructure for completing kernel circuits\r\nfrom acir RecursionConstraints, including connecting the dummy proof in\r\nthe constraint to the genuine witnesses known internally in AztecIvc.\r\nThis PR completes this line work by using the (genuine) verification key\r\nwitnesses in the constraint to construct the stdlib verification keys\r\nfrom which the recursive verifiers are instantiated.\r\n\r\nDoing this properly involved correcting/implementing/testing various\r\nserialization/deserialization/construction methods for native and stdlib\r\nverification keys - this accounts for most of the changes in this PR.\r\nThe corrections mostly applied to Mega and were related to not\r\naccounting for `databus_propagation_data`. I also updated some of the\r\ncorresponding Ultra methods in an attempt to make them a bit more\r\nreadable and more easily maintainable.\r\n\r\ncloses https://github.com/AztecProtocol/barretenberg/issues/1090",
          "timestamp": "2024-09-10T15:57:31-07:00",
          "tree_id": "40b450407a63fd66bd0e89c98ceb713add3d33b6",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/11dc8ff185d74e6e5bc51e85d6bcd6577ac83161"
        },
        "date": 1726010422832,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13208.551596999996,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 9999.809599999999 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5081.5984319999925,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4687.6720669999995 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 39355.33390899999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 39355334000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14570.068407,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14570069000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3624062111,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3624062111 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 145209696,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 145209696 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 2975426016,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2975426016 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 120350600,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 120350600 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98505400+ledwards2225@users.noreply.github.com",
            "name": "ledwards2225",
            "username": "ledwards2225"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "79995c84e0f88c1ee72876fd21c50c33830597fc",
          "message": "chore: use uint32_t instead of size_t for databus data (#8479)\n\nChange type from `size_t` to `uint32_t` for `databus_propagation_data`\r\nto avoid potential issues serializing `size_t`.",
          "timestamp": "2024-09-11T07:17:39-07:00",
          "tree_id": "eb7754317b0f3d6329977a7f5d7e1ceff62db92e",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/79995c84e0f88c1ee72876fd21c50c33830597fc"
        },
        "date": 1726065036568,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13196.205115000026,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10143.045867 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5127.099915999992,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4707.782201 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 39655.819502000006,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 39655819000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14580.904604,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14580904000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3641674960,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3641674960 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 145244147,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 145244147 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 2958248351,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2958248351 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 120353478,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 120353478 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "fcarreiro@users.noreply.github.com",
            "name": "Facundo",
            "username": "fcarreiro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a0c8915ccf00fe1c329bf87760d28b3c42725cf1",
          "message": "feat(avm)!: variants for REVERT opcode (#8487)\n\n3-6% bytecode improvement.",
          "timestamp": "2024-09-11T16:28:56+01:00",
          "tree_id": "08c4016118ae1f77c41d0f8ac13b64dddcfe66e1",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/a0c8915ccf00fe1c329bf87760d28b3c42725cf1"
        },
        "date": 1726069506689,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13206.324732000014,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10225.142978 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5108.099726999995,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4616.502589000001 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 39373.397697,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 39373398000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14701.578383999999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14701578000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3622064715,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3622064715 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 144969196,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 144969196 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 2945470715,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2945470715 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 121366957,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 121366957 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "codygunton@gmail.com",
            "name": "Cody Gunton",
            "username": "codygunton"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5a76ec61fb9dee976cdee8bba8198854d9249bf3",
          "message": "refactor: Protogalaxy verifier matches prover 1 (#8414)\n\nThis is doing some renaming, making types explicit, and simplifying the\r\ninitialization used to produce an output accumulator.",
          "timestamp": "2024-09-11T12:21:12-04:00",
          "tree_id": "2df4f9ee7198b7a0670a5ee21ccfb4c3a5846957",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/5a76ec61fb9dee976cdee8bba8198854d9249bf3"
        },
        "date": 1726072740097,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13126.410951999986,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 9954.003275000001 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5150.760734999992,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4755.643168 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 39464.853223000006,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 39464853000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14595.896837999999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14595896000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3604309527,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3604309527 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 145238763,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 145238763 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 2966150783,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2966150783 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 122920882,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 122920882 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "fcarreiro@users.noreply.github.com",
            "name": "Facundo",
            "username": "fcarreiro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "02c333028bf186f0472738f4a5c39d36f4980941",
          "message": "feat(bb): iterative constexpr_for (#8502)\n\nReplaces the custom made solution. Needed for stack not to blow up in a\nfew places.",
          "timestamp": "2024-09-11T19:08:43+01:00",
          "tree_id": "591c9468c9b467cd6c8649cfb4d3f1f349923b06",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/02c333028bf186f0472738f4a5c39d36f4980941"
        },
        "date": 1726078995443,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13279.449490000019,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10118.935516999998 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5149.59988999999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4706.320391000001 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 39424.879337,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 39424879000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14681.741887,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14681742000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3642355190,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3642355190 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 144739492,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 144739492 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 2975860840,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2975860840 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 120708713,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 120708713 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexghr@users.noreply.github.com",
            "name": "Alex Gherghisan",
            "username": "alexghr"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c1aa6f73d13e860d5fcee07e82347a7633f8b334",
          "message": "feat: native world state (#7516)\n\nThis PR adds a new CPP module for managing the merkle trees that make up\r\nthe world state. A new implementetion of `MerkleTreeDb` is provided to\r\ninteract with the native code.\r\n\r\nmsgpack is used to pass messages across the js<->cpp boundary. Tests\r\nhave been added to assert that the two world state implementations work\r\nin the same way (more tests would be better).\r\n\r\nThis PR builds on top of #7037.\r\n\r\nPS: I'm not as experienced with C++\r\n\r\n---------\r\n\r\nCo-authored-by: PhilWindle <philip.windle@gmail.com>",
          "timestamp": "2024-09-11T18:51:22Z",
          "tree_id": "9836524680064b834aa8d47a0436bfffc1df04d6",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/c1aa6f73d13e860d5fcee07e82347a7633f8b334"
        },
        "date": 1726081702115,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13267.470184000018,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10118.305175 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5201.765956999992,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4781.691881000002 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 39746.689372999994,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 39746689000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14682.158606,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14682158000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3649750872,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3649750872 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 147086561,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 147086561 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3006639401,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3006639401 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 124088338,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 124088338 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "fcarreiro@users.noreply.github.com",
            "name": "Facundo",
            "username": "fcarreiro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bc609fa457b029dee0dc19818e3709a6ea9564ab",
          "message": "feat(avm)!: variants for CAST/NOT opcode (#8497)",
          "timestamp": "2024-09-11T19:54:24+01:00",
          "tree_id": "4b25d378865bb96026aa595ccf621323a2745ab2",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/bc609fa457b029dee0dc19818e3709a6ea9564ab"
        },
        "date": 1726082122395,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13183.92880600001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10007.638689999998 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5103.894064999991,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4715.182666000001 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 39450.927156,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 39450927000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14582.466106999998,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14582467000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3639854180,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3639854180 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 146615955,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 146615955 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 2967668496,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2967668496 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 120159406,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 120159406 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "blorktronics@gmail.com",
            "name": "Zachary James Williamson",
            "username": "zac-williamson"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "12a093d25e0c32fed5eceee424b24111ad2f14a4",
          "message": "feat: (bb) remove redundant constraints on field/group elements when using goblin plonk (#8409)\n\nThis PR adds distinct classes for goblin plonk group elements and\r\ncoordinate scalars in the stdlib so that we can refine the\r\nimplementation of these objects without proliferating edge cases in the\r\nrest of our codebase\r\n\r\nThis Pr reduces the cost of\r\n`ProtogalaxyRecursiveTests/0.RecursiveFoldingTest` from 24,630 gates to\r\n14,106 gates.\r\n\r\n`stdlib::element` is now a class alias that points to either the default\r\nelement class definition or the goblin plonk class definition depending\r\non whether goblin plonk is supported.\r\n\r\nThis allows us to apply the following improvements/useful restrictions:\r\n\r\n1. goblin plonk group elements no longer apply `on_curve` checks when\r\ncreated (performed in the eccvm)\r\n2. goblin plonk coordinate field elements no longer have range\r\nconstraints applied to them (performed in the translator circuit)\r\n3. goblin plonk coordinate field elements no longer generate constraints\r\nwhen `assert_is_in_field` is applied (performed in the translator\r\ncircuit)\r\n4. goblin plonk coordinate field elements do not have arithmetic\r\noperations exposed (manipulation of goblin plonk group elements should\r\nhappen exclusively through the eccvm)\r\n\r\nIn addition, this PR improve the handling of checking whether bn254\r\npoints are at infinity when consuming points from a transcript via\r\n`field_conversion`",
          "timestamp": "2024-09-11T15:25:33-04:00",
          "tree_id": "21d40e8f9ec33a56e8b80da1ba90d7659cf033bc",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/12a093d25e0c32fed5eceee424b24111ad2f14a4"
        },
        "date": 1726083699858,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 12945.184008000013,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 9348.173422 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5186.116858999995,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4703.907881 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 38458.24129499999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 38458243000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14792.859840999998,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14792861000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3617915290,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3617915290 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 137814885,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 137814885 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 2968578650,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2968578650 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 114061295,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 114061295 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "adam.domurad@gmail.com",
            "name": "ludamad",
            "username": "ludamad"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "32fd347f887af57456767bcb7a38070f8c4b2b28",
          "message": "chore(bb): fix mac build (#8505)\n\nFor noir bb publish\r\n\r\nCloses #8499",
          "timestamp": "2024-09-11T20:02:37Z",
          "tree_id": "ed5f96803dc746a1f8cfbc94eff9f6d39662b697",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/32fd347f887af57456767bcb7a38070f8c4b2b28"
        },
        "date": 1726086216299,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 12876.275155000001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 9139.142566 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5148.157759,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4742.403758 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 38130.76783900001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 38130767000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14831.925122999999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14831925000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3589847220,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3589847220 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 135248601,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 135248601 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 2911825917,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2911825917 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 113199311,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 113199311 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "fcarreiro@users.noreply.github.com",
            "name": "Facundo",
            "username": "fcarreiro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7e7353195592d503a92c7222788c739006fa81fc",
          "message": "feat(avm): parallelize polynomial alloc and set (#8520)\n\nThis PR\n* Parallelizes allocation and initialization of prover polys\n* Removes duplicated initialization\n* Removes copy (replaces with move)\n\nImprovements in proving time for a 2^20 trace\n* Creation of prover time goes down 90%\n* Overall proving time goes down ~40%\n\n2^20 before\n```\n>>> prove/create_prover_ms: 53011\n>>> prove/all_ms: 95457\n\nprove/create_composer_ms: 0\nprove/create_verifier_ms: 322\nprove/execute_log_derivative_inverse_commitments_round_ms: 2579\nprove/execute_log_derivative_inverse_round_ms: 2294\nprove/execute_pcs_rounds_ms: 1915\nprove/execute_relation_check_rounds_ms: 12066\nprove/execute_wire_commitments_round_ms: 1138\nprove/gen_trace_ms: 18690\n```\n\n2^20 after\n```\n>>> prove/create_prover_ms: 5797\n>>> prove/all_ms: 50688\n\ncircuit_builder/init_polys_to_be_shifted_ms: 660\ncircuit_builder/init_polys_unshifted_ms: 301\ncircuit_builder/set_polys_shifted_ms: 0\ncircuit_builder/set_polys_unshifted_ms: 4395\ncomposer/create_prover:commitment_key_ms: 152\ncomposer/create_prover:construct_prover_ms: 55\ncomposer/create_prover:proving_key_ms: 177\ncomposer/create_prover:witness_ms: 5410\nprove/create_composer_ms: 0\nprove/create_verifier_ms: 326\nprove/execute_log_derivative_inverse_commitments_round_ms: 2523\nprove/execute_log_derivative_inverse_round_ms: 2185\nprove/execute_pcs_rounds_ms: 1766\nprove/execute_relation_check_rounds_ms: 11966\nprove/execute_wire_commitments_round_ms: 1148\nprove/gen_trace_ms: 20765\n```",
          "timestamp": "2024-09-12T20:31:20+01:00",
          "tree_id": "5b60b620c63d0aa6330d10c3000ae7bdad0da69a",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/7e7353195592d503a92c7222788c739006fa81fc"
        },
        "date": 1726170165994,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 12904.468823000003,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 9300.876131 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5347.727393999989,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4894.554417999999 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 38460.641861,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 38460642000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14630.742252000002,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14630742000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3603398944,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3603398944 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 135956946,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 135956946 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 2968437092,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2968437092 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 113648944,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 113648944 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "codygunton@gmail.com",
            "name": "Cody Gunton",
            "username": "codygunton"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d9e3f4d42118d16b343b818a0649e6cfbc14ea31",
          "message": "feat: Checking finalized sizes + a test of two folding verifiers (#8503)\n\nOriginal goal: add a test so we can get the size of a circuit containing\r\ntwo folding verifiers.\r\n\r\nDetour: (Ultra and Mega flavors only) getting the size after adding\r\nnonzero gates and finalizing a circuit used to require adding a printout\r\nto the Honk proving key constructor, which would either be noise in many\r\ntests, or which would then have to be removed. Rearranging the\r\nensure_nonzero function, we can accommodate the use case in tests where\r\nwe want to print out the number of gates after finalization. To do this,\r\njust call finalize and and print the number of gates before passing the\r\ncircuit to the prover or proving key constructor. You get a warning, but\r\nthat's appropriate.\r\n\r\nCaution: I left in a code path that finalizes but does add extra gates\r\nbecause this was in use in many places. If those are all valid uses,\r\nthen we only really want the gate-adding version in one place, so I made\r\nthe default not add nonzero gates.\r\n\r\n```\r\nConsole is in 'commands' mode, prefix expressions with '?'.\r\nLaunching: /mnt/user-data/cody/aztec-packages/barretenberg/cpp/build-debug/bin/stdlib_protogalaxy_verifier_tests --gtest_color=no --gtest_filter=ProtogalaxyRecursiveTests/0.RecursiveFoldingTwiceTest --gtest_also_run_disabled_tests --gtest_break_on_failure\r\nLaunched process 2323108\r\nRunning main() from /mnt/user-data/cody/aztec-packages/barretenberg/cpp/build-debug/_deps/gtest-src/googletest/src/gtest_main.cc\r\nNote: Google Test filter = ProtogalaxyRecursiveTests/0.RecursiveFoldingTwiceTest\r\n[==========] Running 1 test from 1 test suite.\r\n[----------] Global test environment set-up.\r\n[----------] 1 test from ProtogalaxyRecursiveTests/0, where TypeParam = bb::MegaRecursiveFlavor_<bb::MegaCircuitBuilder_<bb::field<bb::Bn254FrParams> > >\r\n[ RUN      ] ProtogalaxyRecursiveTests/0.RecursiveFoldingTwiceTest\r\nFolding Recursive Verifier: num gates unfinalized = 18085\r\nFolding Recursive Verifier: num gates finalized = 20211\r\nWARNING: Redundant call to finalize_circuit(). Is this intentional?\r\nDyadic size of verifier circuit: 32768\r\n[       OK ] ProtogalaxyRecursiveTests/0.RecursiveFoldingTwiceTest (6768 ms)\r\n[----------] 1 test from ProtogalaxyRecursiveTests/0 (6768 ms total)\r\n\r\n[----------] Global test environment tear-down\r\n[==========] 1 test from 1 test suite ran. (6768 ms total)\r\n[  PASSED  ] 1 test.\r\nProcess exited with code 0.\r\n```\r\n```",
          "timestamp": "2024-09-12T15:59:50-04:00",
          "tree_id": "84a28c9d4d65e6a15c4a51ca336df9a6a3e225db",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/d9e3f4d42118d16b343b818a0649e6cfbc14ea31"
        },
        "date": 1726171918422,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 12751.931225000022,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 9122.387258 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5080.029400000001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4632.325789 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 38649.88755399999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 38649888000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14701.212471,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14701213000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3604012484,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3604012484 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 135199538,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 135199538 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 2970555677,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2970555677 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 113856109,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 113856109 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lucasxia01@gmail.com",
            "name": "Lucas Xia",
            "username": "lucasxia01"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b46e96e8e5d05876a3700b9e50d29d6f349ea6e",
          "message": "feat: new test programs for wasm benchmarking (#8389)\n\nThis PR creates new test programs: bench_2_to_17, which is just a\r\nprogram constructed out of poseidon hashes with around 2^17 - epsilon\r\ngates, fold_2_to_17, which is a program that has 2 2^17-eps sized\r\ncircuits that would get folded together, and single_verify_proof, which\r\nis a plonk recursive verifier which now has 2^18+eps gates.\r\n\r\nIt also reworks some of the interfaces in main.ts. In particular, it\r\ngets the foldAndVerifyProgram flow working with fold_basic (and\r\nSMALL_TEST execution trace structure).\r\n\r\nI used the fold_2_to_17 test program to benchmark memory usage of\r\nClientIVC in WASM, which came out to be 700MiB. Note that this was only\r\npossible by turning off the structure, because it would fail otherwise\r\nfrom too many poseidon gates.\r\n\r\nRunning ClientIVC on the fold_basic test program using\r\nTraceStructure::SMALL_TEST (which ends up with dyadic size of 2^18)\r\ngives 1166.56MiB in WASM. Note that the builder memory is not an actual\r\nfull 2^18 gate circuit because the circuits only had 22, 4539, 16432\r\ngates, so it should actually be close to 1250MiB or so if we had full\r\n2^18 gate circuits.",
          "timestamp": "2024-09-12T22:08:59Z",
          "tree_id": "681df11b71a1c3a992b8f6cfb6557e295d837d12",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/0b46e96e8e5d05876a3700b9e50d29d6f349ea6e"
        },
        "date": 1726179927187,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 12916.929431,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 9230.08279 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5095.920510999988,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4651.445372 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 38435.168302,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 38435169000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14706.829956,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14706831000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3609961846,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3609961846 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 136023527,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 136023527 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 2941582330,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2941582330 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 112389636,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 112389636 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sirasistant@gmail.com",
            "name": "Álvaro Rodríguez",
            "username": "sirasistant"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ceda3612f0d12d43bffde9c9b992a432d1a13d75",
          "message": "feat!: Add Not instruction in brillig (#8488)\n\nThe AVM supports Not. We add it in brillig to avoid having to codegen it\r\nwith two operations.\r\n\r\n<details>\r\n\r\n<summary>Brillig opcode count changes</summary>\r\n\r\n```\r\ncontracts: Transpiling  AppSubscription::constructor with size 1969 => 1964\r\ncontracts: Transpiling  Auth::constructor with size 1557 => 1552\r\ncontracts: Transpiling  Auth::get_authorized with size 128 => 127\r\ncontracts: Transpiling  Auth::get_authorized_delay with size 175 => 174\r\ncontracts: Transpiling  Auth::get_scheduled_authorized with size 107 => 106\r\ncontracts: Transpiling  Auth::set_authorized with size 857 => 856\r\ncontracts: Transpiling  Auth::set_authorized_delay with size 826 => 825\r\ncontracts: Transpiling  AuthRegistry::_set_authorized with size 86 => 86\r\ncontracts: Transpiling  AuthRegistry::consume with size 522 => 521\r\ncontracts: Transpiling  AuthRegistry::is_consumable with size 123 => 122\r\ncontracts: Transpiling  AuthRegistry::is_reject_all with size 106 => 105\r\ncontracts: Transpiling  AuthRegistry::set_authorized with size 81 => 81\r\ncontracts: Transpiling  AuthRegistry::set_reject_all with size 64 => 64\r\ncontracts: Transpiling  AuthWitTest::consume_public with size 77 => 77\r\ncontracts: Transpiling  AvmInitializerTest::constructor with size 1553 => 1548\r\ncontracts: Transpiling  AvmInitializerTest::read_storage_immutable with size 89 => 88\r\ncontracts: Transpiling  AvmTest::add_args_return with size 17 => 17\r\ncontracts: Transpiling  AvmTest::add_storage_map with size 182 => 181\r\ncontracts: Transpiling  AvmTest::add_u128 with size 34 => 34\r\ncontracts: Transpiling  AvmTest::assert_nullifier_exists with size 18 => 18\r\ncontracts: Transpiling  AvmTest::assert_same with size 20 => 20\r\ncontracts: Transpiling  AvmTest::assert_timestamp with size 17 => 17\r\ncontracts: Transpiling  AvmTest::assertion_failure with size 16 => 16\r\ncontracts: Transpiling  AvmTest::check_selector with size 16 => 16\r\ncontracts: Transpiling  AvmTest::create_different_nullifier_in_nested_call with size 121 => 120\r\ncontracts: Transpiling  AvmTest::create_same_nullifier_in_nested_call with size 119 => 118\r\ncontracts: Transpiling  AvmTest::debug_logging with size 282 => 282\r\ncontracts: Transpiling  AvmTest::elliptic_curve_add_and_double with size 23 => 23\r\ncontracts: Transpiling  AvmTest::emit_nullifier_and_check with size 19 => 19\r\ncontracts: Transpiling  AvmTest::emit_unencrypted_log with size 524 => 520\r\ncontracts: Transpiling  AvmTest::get_address with size 15 => 15\r\ncontracts: Transpiling  AvmTest::get_args_hash with size 1046 => 1041\r\ncontracts: Transpiling  AvmTest::get_block_number with size 15 => 15\r\ncontracts: Transpiling  AvmTest::get_chain_id with size 15 => 15\r\ncontracts: Transpiling  AvmTest::get_da_gas_left with size 15 => 15\r\ncontracts: Transpiling  AvmTest::get_fee_per_da_gas with size 15 => 15\r\ncontracts: Transpiling  AvmTest::get_fee_per_l2_gas with size 15 => 15\r\ncontracts: Transpiling  AvmTest::get_function_selector with size 15 => 15\r\ncontracts: Transpiling  AvmTest::get_l2_gas_left with size 15 => 15\r\ncontracts: Transpiling  AvmTest::get_sender with size 15 => 15\r\ncontracts: Transpiling  AvmTest::get_storage_address with size 15 => 15\r\ncontracts: Transpiling  AvmTest::get_timestamp with size 15 => 15\r\ncontracts: Transpiling  AvmTest::get_transaction_fee with size 15 => 15\r\ncontracts: Transpiling  AvmTest::get_version with size 15 => 15\r\ncontracts: Transpiling  AvmTest::keccak_f1600 with size 77 => 76\r\ncontracts: Transpiling  AvmTest::keccak_hash with size 708 => 703\r\ncontracts: Transpiling  AvmTest::l1_to_l2_msg_exists with size 19 => 19\r\ncontracts: Transpiling  AvmTest::modulo2 with size 18 => 18\r\ncontracts: Transpiling  AvmTest::nested_call_to_add with size 196 => 195\r\ncontracts: Transpiling  AvmTest::nested_call_to_add_with_gas with size 204 => 203\r\ncontracts: Transpiling  AvmTest::nested_static_call_to_add with size 196 => 195\r\ncontracts: Transpiling  AvmTest::nested_static_call_to_set_storage with size 118 => 117\r\ncontracts: Transpiling  AvmTest::new_note_hash with size 13 => 13\r\ncontracts: Transpiling  AvmTest::new_nullifier with size 13 => 13\r\ncontracts: Transpiling  AvmTest::note_hash_exists with size 19 => 19\r\ncontracts: Transpiling  AvmTest::nullifier_collision with size 14 => 14\r\ncontracts: Transpiling  AvmTest::nullifier_exists with size 19 => 19\r\ncontracts: Transpiling  AvmTest::pedersen_commit with size 73 => 73\r\ncontracts: Transpiling  AvmTest::pedersen_hash with size 42 => 41\r\ncontracts: Transpiling  AvmTest::pedersen_hash_with_index with size 42 => 41\r\ncontracts: Transpiling  AvmTest::poseidon2_hash with size 306 => 304\r\ncontracts: Transpiling  AvmTest::read_storage_list with size 115 => 113\r\ncontracts: Transpiling  AvmTest::read_storage_map with size 103 => 102\r\ncontracts: Transpiling  AvmTest::read_storage_single with size 82 => 81\r\ncontracts: Transpiling  AvmTest::send_l2_to_l1_msg with size 14 => 14\r\ncontracts: Transpiling  AvmTest::set_opcode_big_field with size 15 => 15\r\ncontracts: Transpiling  AvmTest::set_opcode_really_big_field with size 15 => 15\r\ncontracts: Transpiling  AvmTest::set_opcode_small_field with size 15 => 15\r\ncontracts: Transpiling  AvmTest::set_opcode_u32 with size 15 => 15\r\ncontracts: Transpiling  AvmTest::set_opcode_u64 with size 15 => 15\r\ncontracts: Transpiling  AvmTest::set_opcode_u8 with size 15 => 15\r\ncontracts: Transpiling  AvmTest::set_read_storage_single with size 128 => 127\r\ncontracts: Transpiling  AvmTest::set_storage_list with size 47 => 47\r\ncontracts: Transpiling  AvmTest::set_storage_map with size 79 => 79\r\ncontracts: Transpiling  AvmTest::set_storage_single with size 43 => 43\r\ncontracts: Transpiling  AvmTest::sha256_hash with size 62 => 61\r\ncontracts: Transpiling  AvmTest::test_get_contract_instance with size 178 => 177\r\ncontracts: Transpiling  AvmTest::test_get_contract_instance_raw with size 69 => 69\r\ncontracts: Transpiling  AvmTest::to_radix_le with size 40 => 39\r\ncontracts: Transpiling  AvmTest::u128_addition_overflow with size 275 => 271\r\ncontracts: Transpiling  AvmTest::u128_from_integer_overflow with size 140 => 140\r\ncontracts: Transpiling  AvmTest::variable_base_msm with size 84 => 84\r\ncontracts: Transpiling  Benchmarking::broadcast with size 113 => 112\r\ncontracts: Transpiling  Benchmarking::increment_balance with size 263 => 261\r\ncontracts: Transpiling  CardGame::on_card_played with size 882 => 880\r\ncontracts: Transpiling  CardGame::on_cards_claimed with size 745 => 743\r\ncontracts: Transpiling  CardGame::on_game_joined with size 676 => 672\r\ncontracts: Transpiling  CardGame::start_game with size 1150 => 1148\r\ncontracts: Transpiling  Child::pub_get_value with size 24 => 24\r\ncontracts: Transpiling  Child::pub_inc_value with size 145 => 144\r\ncontracts: Transpiling  Child::pub_inc_value_internal with size 150 => 149\r\ncontracts: Transpiling  Child::pub_set_value with size 62 => 62\r\ncontracts: Transpiling  Child::set_value_twice_with_nested_first with size 182 => 181\r\ncontracts: Transpiling  Child::set_value_twice_with_nested_last with size 182 => 181\r\ncontracts: Transpiling  Child::set_value_with_two_nested_calls with size 129 => 129\r\ncontracts: Transpiling  Claim::constructor with size 1657 => 1652\r\ncontracts: Transpiling  Crowdfunding::_publish_donation_receipts with size 153 => 151\r\ncontracts: Transpiling  Crowdfunding::init with size 1763 => 1758\r\ncontracts: Transpiling  DelegatedOn::public_set_value with size 46 => 46\r\ncontracts: Transpiling  Delegator::public_delegate_set_value with size 94 => 93\r\ncontracts: Transpiling  DocsExample::get_shared_immutable_constrained_public with size 97 => 96\r\ncontracts: Transpiling  DocsExample::get_shared_immutable_constrained_public_indirect with size 86 => 86\r\ncontracts: Transpiling  DocsExample::get_shared_immutable_constrained_public_multiple with size 134 => 132\r\ncontracts: Transpiling  DocsExample::initialize_public_immutable with size 164 => 163\r\ncontracts: Transpiling  DocsExample::initialize_shared_immutable with size 164 => 163\r\ncontracts: Transpiling  DocsExample::spend_public_authwit with size 16 => 16\r\ncontracts: Transpiling  DocsExample::update_leader with size 54 => 54\r\ncontracts: Transpiling  EasyPrivateVoting::add_to_tally_public with size 220 => 219\r\ncontracts: Transpiling  EasyPrivateVoting::constructor with size 1614 => 1609\r\ncontracts: Transpiling  EasyPrivateVoting::end_vote with size 136 => 135\r\ncontracts: Transpiling  FeeJuice::_increase_public_balance with size 196 => 195\r\ncontracts: Transpiling  FeeJuice::balance_of_public with size 115 => 114\r\ncontracts: Transpiling  FeeJuice::check_balance with size 168 => 167\r\ncontracts: Transpiling  FeeJuice::set_portal with size 208 => 207\r\ncontracts: Transpiling  FPC::constructor with size 1553 => 1548\r\ncontracts: Transpiling  FPC::pay_refund with size 387 => 384\r\ncontracts: Transpiling  FPC::pay_refund_with_shielded_rebate with size 387 => 384\r\ncontracts: Transpiling  FPC::prepare_fee with size 291 => 290\r\ncontracts: Transpiling  ImportTest::pub_call_public_fn with size 118 => 117\r\ncontracts: Transpiling  InclusionProofs::constructor with size 1479 => 1474\r\ncontracts: Transpiling  InclusionProofs::push_nullifier_public with size 20 => 20\r\ncontracts: Transpiling  InclusionProofs::test_nullifier_inclusion_from_public with size 24 => 24\r\ncontracts: Transpiling  KeyRegistry::register_initial_keys with size 1066 => 1056\r\ncontracts: Transpiling  KeyRegistry::rotate_npk_m with size 1954 => 1941\r\ncontracts: Transpiling  Lending::_borrow with size 2276 => 2273\r\ncontracts: Transpiling  Lending::_deposit with size 221 => 220\r\ncontracts: Transpiling  Lending::_repay with size 1358 => 1356\r\ncontracts: Transpiling  Lending::_withdraw with size 2299 => 2296\r\ncontracts: Transpiling  Lending::borrow_public with size 232 => 231\r\ncontracts: Transpiling  Lending::deposit_public with size 501 => 500\r\ncontracts: Transpiling  Lending::get_asset with size 158 => 157\r\ncontracts: Transpiling  Lending::get_assets with size 179 => 177\r\ncontracts: Transpiling  Lending::get_position with size 848 => 846\r\ncontracts: Transpiling  Lending::init with size 300 => 299\r\ncontracts: Transpiling  Lending::repay_public with size 447 => 446\r\ncontracts: Transpiling  Lending::update_accumulator with size 2423 => 2419\r\ncontracts: Transpiling  Lending::withdraw_public with size 232 => 231\r\ncontracts: Transpiling  Parent::pub_entry_point with size 75 => 75\r\ncontracts: Transpiling  Parent::pub_entry_point_twice with size 127 => 127\r\ncontracts: Transpiling  Parent::public_nested_static_call with size 969 => 964\r\ncontracts: Transpiling  Parent::public_static_call with size 102 => 101\r\ncontracts: Transpiling  PriceFeed::get_price with size 112 => 111\r\ncontracts: Transpiling  PriceFeed::set_price with size 75 => 75\r\ncontracts: Transpiling  PrivateFPC::constructor with size 1556 => 1551\r\ncontracts: Transpiling  Router::_check_block_number with size 163 => 157\r\ncontracts: Transpiling  Router::_check_timestamp with size 166 => 160\r\ncontracts: Transpiling  StatefulTest::get_public_value with size 103 => 102\r\ncontracts: Transpiling  StatefulTest::increment_public_value with size 134 => 133\r\ncontracts: Transpiling  StatefulTest::increment_public_value_no_init_check with size 127 => 126\r\ncontracts: Transpiling  StatefulTest::public_constructor with size 1597 => 1592\r\ncontracts: Transpiling  StaticChild::pub_get_value with size 27 => 27\r\ncontracts: Transpiling  StaticChild::pub_illegal_inc_value with size 148 => 147\r\ncontracts: Transpiling  StaticChild::pub_inc_value with size 145 => 144\r\ncontracts: Transpiling  StaticChild::pub_set_value with size 62 => 62\r\ncontracts: Transpiling  StaticParent::public_call with size 75 => 75\r\ncontracts: Transpiling  StaticParent::public_get_value_from_child with size 142 => 141\r\ncontracts: Transpiling  StaticParent::public_nested_static_call with size 266 => 265\r\ncontracts: Transpiling  StaticParent::public_static_call with size 102 => 101\r\ncontracts: Transpiling  Test::assert_public_global_vars with size 42 => 42\r\ncontracts: Transpiling  Test::consume_message_from_arbitrary_sender_public with size 923 => 920\r\ncontracts: Transpiling  Test::consume_mint_public_message with size 1145 => 1141\r\ncontracts: Transpiling  Test::create_l2_to_l1_message_arbitrary_recipient_public with size 14 => 14\r\ncontracts: Transpiling  Test::create_l2_to_l1_message_public with size 28 => 28\r\ncontracts: Transpiling  Test::dummy_public_call with size 16 => 16\r\ncontracts: Transpiling  Test::emit_nullifier_public with size 13 => 13\r\ncontracts: Transpiling  Test::emit_unencrypted with size 255 => 252\r\ncontracts: Transpiling  Test::is_time_equal with size 20 => 20\r\ncontracts: Transpiling  TestLog::emit_unencrypted_events with size 251 => 249\r\ncontracts: Transpiling  Token::_increase_public_balance with size 187 => 186\r\ncontracts: Transpiling  Token::_reduce_total_supply with size 171 => 170\r\ncontracts: Transpiling  Token::admin with size 92 => 91\r\ncontracts: Transpiling  Token::assert_minter_and_mint with size 236 => 235\r\ncontracts: Transpiling  Token::balance_of_public with size 122 => 121\r\ncontracts: Transpiling  Token::burn_public with size 1618 => 1612\r\ncontracts: Transpiling  Token::complete_refund with size 440 => 440\r\ncontracts: Transpiling  Token::constructor with size 2016 => 2011\r\ncontracts: Transpiling  Token::is_minter with size 113 => 112\r\ncontracts: Transpiling  Token::mint_private with size 509 => 508\r\ncontracts: Transpiling  Token::mint_public with size 358 => 357\r\ncontracts: Transpiling  Token::public_get_decimals with size 95 => 94\r\ncontracts: Transpiling  Token::public_get_name with size 92 => 91\r\ncontracts: Transpiling  Token::public_get_symbol with size 92 => 91\r\ncontracts: Transpiling  Token::set_admin with size 136 => 135\r\ncontracts: Transpiling  Token::set_minter with size 156 => 155\r\ncontracts: Transpiling  Token::shield with size 1800 => 1794\r\ncontracts: Transpiling  Token::total_supply with size 104 => 103\r\ncontracts: Transpiling  Token::transfer_public with size 1633 => 1627\r\ncontracts: Transpiling  TokenBlacklist::_increase_public_balance with size 187 => 186\r\ncontracts: Transpiling  TokenBlacklist::_reduce_total_supply with size 171 => 170\r\ncontracts: Transpiling  TokenBlacklist::balance_of_public with size 122 => 121\r\ncontracts: Transpiling  TokenBlacklist::burn_public with size 1754 => 1747\r\ncontracts: Transpiling  TokenBlacklist::constructor with size 2308 => 2303\r\ncontracts: Transpiling  TokenBlacklist::get_roles with size 179 => 178\r\ncontracts: Transpiling  TokenBlacklist::mint_private with size 568 => 567\r\ncontracts: Transpiling  TokenBlacklist::mint_public with size 537 => 536\r\ncontracts: Transpiling  TokenBlacklist::shield with size 1936 => 1929\r\ncontracts: Transpiling  TokenBlacklist::total_supply with size 104 => 103\r\ncontracts: Transpiling  TokenBlacklist::transfer_public with size 1904 => 1897\r\ncontracts: Transpiling  TokenBlacklist::update_roles with size 1074 => 1073\r\ncontracts: Transpiling  TokenBridge::_assert_token_is_same with size 95 => 94\r\ncontracts: Transpiling  TokenBridge::_call_mint_on_token with size 248 => 246\r\ncontracts: Transpiling  TokenBridge::claim_public with size 1397 => 1392\r\ncontracts: Transpiling  TokenBridge::constructor with size 1583 => 1578\r\ncontracts: Transpiling  TokenBridge::exit_to_l1_public with size 810 => 807\r\ncontracts: Transpiling  TokenBridge::get_portal_address_public with size 94 => 93\r\ncontracts: Transpiling  TokenBridge::get_token with size 92 => 91\r\ncontracts: Transpiling  Uniswap::_approve_bridge_and_exit_input_asset_to_L1 with size 2612 => 2604\r\ncontracts: Transpiling  Uniswap::_assert_token_is_same with size 87 => 87\r\ncontracts: Transpiling  Uniswap::constructor with size 1553 => 1548\r\ncontracts: Transpiling  Uniswap::swap_public with size 3005 => 2998\r\ncontracts: Transpiling contracts...\r\n```\r\n\r\n</details>\r\n\r\n---------\r\n\r\nCo-authored-by: fcarreiro <facundo@aztecprotocol.com>",
          "timestamp": "2024-09-13T10:15:19+01:00",
          "tree_id": "d821c91a9511016bc0f9665968fa81df9f627a77",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/ceda3612f0d12d43bffde9c9b992a432d1a13d75"
        },
        "date": 1726219683309,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 12847.47385,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 9330.475976 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5091.26728599999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4633.977906 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 38314.435849,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 38314436000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14670.527130000002,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14670528000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3592544066,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3592544066 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 135433034,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 135433034 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 2944257279,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2944257279 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 113378157,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 113378157 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49558828+AztecBot@users.noreply.github.com",
            "name": "Aztec Bot",
            "username": "AztecBot"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bcec12dbf79b658406dc21083f8fdeef8962085e",
          "message": "chore(master): Release 0.55.0 (#8478)\n\n:robot: I have created a release *beep* *boop*\r\n---\r\n\r\n\r\n<details><summary>aztec-package: 0.55.0</summary>\r\n\r\n##\r\n[0.55.0](https://github.com/AztecProtocol/aztec-packages/compare/aztec-package-v0.54.0...aztec-package-v0.55.0)\r\n(2024-09-13)\r\n\r\n\r\n### Bug Fixes\r\n\r\n* Load prover node config from env\r\n([#8525](https://github.com/AztecProtocol/aztec-packages/issues/8525))\r\n([7065962](https://github.com/AztecProtocol/aztec-packages/commit/7065962bb507555bcbb25cb3bbfc2a0a90687000))\r\n\r\n\r\n### Miscellaneous\r\n\r\n* Remove unneeded propose and da oracle\r\n([#8474](https://github.com/AztecProtocol/aztec-packages/issues/8474))\r\n([274a6b7](https://github.com/AztecProtocol/aztec-packages/commit/274a6b73281e5b9a7bc037aaf8888230de7b99a9))\r\n</details>\r\n\r\n<details><summary>barretenberg.js: 0.55.0</summary>\r\n\r\n##\r\n[0.55.0](https://github.com/AztecProtocol/aztec-packages/compare/barretenberg.js-v0.54.0...barretenberg.js-v0.55.0)\r\n(2024-09-13)\r\n\r\n\r\n### Features\r\n\r\n* New test programs for wasm benchmarking\r\n([#8389](https://github.com/AztecProtocol/aztec-packages/issues/8389))\r\n([0b46e96](https://github.com/AztecProtocol/aztec-packages/commit/0b46e96e8e5d05876a3700b9e50d29d6f349ea6e))\r\n</details>\r\n\r\n<details><summary>aztec-packages: 0.55.0</summary>\r\n\r\n##\r\n[0.55.0](https://github.com/AztecProtocol/aztec-packages/compare/aztec-packages-v0.54.0...aztec-packages-v0.55.0)\r\n(2024-09-13)\r\n\r\n\r\n### ⚠ BREAKING CHANGES\r\n\r\n* Add Not instruction in brillig\r\n([#8488](https://github.com/AztecProtocol/aztec-packages/issues/8488))\r\n* refactor NoteGetterOptions::select API\r\n([#8504](https://github.com/AztecProtocol/aztec-packages/issues/8504))\r\n* **avm:** variants for CAST/NOT opcode\r\n([#8497](https://github.com/AztecProtocol/aztec-packages/issues/8497))\r\n* **avm:** variants for REVERT opcode\r\n([#8487](https://github.com/AztecProtocol/aztec-packages/issues/8487))\r\n\r\n### Features\r\n\r\n* (bb) remove redundant constraints on field/group elements when using\r\ngoblin plonk\r\n([#8409](https://github.com/AztecProtocol/aztec-packages/issues/8409))\r\n([12a093d](https://github.com/AztecProtocol/aztec-packages/commit/12a093d25e0c32fed5eceee424b24111ad2f14a4))\r\n* Add `Module::structs` (https://github.com/noir-lang/noir/pull/6017)\r\n([cb20e07](https://github.com/AztecProtocol/aztec-packages/commit/cb20e078dd909656110d133339b2b425e6c3ebb0))\r\n* Add `TypedExpr::get_type`\r\n(https://github.com/noir-lang/noir/pull/5992)\r\n([875cfe6](https://github.com/AztecProtocol/aztec-packages/commit/875cfe649e76d96a2b07a25c870500543566efd1))\r\n* Add assertions for ACVM `FunctionInput` `bit_size`\r\n(https://github.com/noir-lang/noir/pull/5864)\r\n([20d7576](https://github.com/AztecProtocol/aztec-packages/commit/20d75766cc533b3cb024937dd62251329c78b395))\r\n* Add Not instruction in brillig\r\n([#8488](https://github.com/AztecProtocol/aztec-packages/issues/8488))\r\n([ceda361](https://github.com/AztecProtocol/aztec-packages/commit/ceda3612f0d12d43bffde9c9b992a432d1a13d75))\r\n* Add timeouts for request / response stream connections\r\n([#8434](https://github.com/AztecProtocol/aztec-packages/issues/8434))\r\n([190c27f](https://github.com/AztecProtocol/aztec-packages/commit/190c27f20e5849eb50c4c33233e36565c21bb51a))\r\n* **avm:** Parallelize polynomial alloc and set\r\n([#8520](https://github.com/AztecProtocol/aztec-packages/issues/8520))\r\n([7e73531](https://github.com/AztecProtocol/aztec-packages/commit/7e7353195592d503a92c7222788c739006fa81fc))\r\n* **avm:** Variants for CAST/NOT opcode\r\n([#8497](https://github.com/AztecProtocol/aztec-packages/issues/8497))\r\n([bc609fa](https://github.com/AztecProtocol/aztec-packages/commit/bc609fa457b029dee0dc19818e3709a6ea9564ab))\r\n* **avm:** Variants for REVERT opcode\r\n([#8487](https://github.com/AztecProtocol/aztec-packages/issues/8487))\r\n([a0c8915](https://github.com/AztecProtocol/aztec-packages/commit/a0c8915ccf00fe1c329bf87760d28b3c42725cf1))\r\n* **bb:** Iterative constexpr_for\r\n([#8502](https://github.com/AztecProtocol/aztec-packages/issues/8502))\r\n([02c3330](https://github.com/AztecProtocol/aztec-packages/commit/02c333028bf186f0472738f4a5c39d36f4980941))\r\n* Better error message for misplaced doc comments\r\n(https://github.com/noir-lang/noir/pull/5990)\r\n([875cfe6](https://github.com/AztecProtocol/aztec-packages/commit/875cfe649e76d96a2b07a25c870500543566efd1))\r\n* Change the layout of arrays and vectors to be a single pointer\r\n([#8448](https://github.com/AztecProtocol/aztec-packages/issues/8448))\r\n([3ad624c](https://github.com/AztecProtocol/aztec-packages/commit/3ad624cc343834e8c078c3fe99f3add08f22ffe3))\r\n* Checking finalized sizes + a test of two folding verifiers\r\n([#8503](https://github.com/AztecProtocol/aztec-packages/issues/8503))\r\n([d9e3f4d](https://github.com/AztecProtocol/aztec-packages/commit/d9e3f4d42118d16b343b818a0649e6cfbc14ea31))\r\n* Extract brillig slice ops to reusable procedures\r\n(https://github.com/noir-lang/noir/pull/6002)\r\n([20d7576](https://github.com/AztecProtocol/aztec-packages/commit/20d75766cc533b3cb024937dd62251329c78b395))\r\n* Format trait impl functions\r\n(https://github.com/noir-lang/noir/pull/6016)\r\n([cb20e07](https://github.com/AztecProtocol/aztec-packages/commit/cb20e078dd909656110d133339b2b425e6c3ebb0))\r\n* Impl Hash and Eq on more comptime types\r\n(https://github.com/noir-lang/noir/pull/6022)\r\n([cb20e07](https://github.com/AztecProtocol/aztec-packages/commit/cb20e078dd909656110d133339b2b425e6c3ebb0))\r\n* Implement LSP code action \"Implement missing members\"\r\n(https://github.com/noir-lang/noir/pull/6020)\r\n([cb20e07](https://github.com/AztecProtocol/aztec-packages/commit/cb20e078dd909656110d133339b2b425e6c3ebb0))\r\n* Let `has_named_attribute` work for built-in attributes\r\n(https://github.com/noir-lang/noir/pull/6024)\r\n([cb20e07](https://github.com/AztecProtocol/aztec-packages/commit/cb20e078dd909656110d133339b2b425e6c3ebb0))\r\n* LSP completion function detail\r\n(https://github.com/noir-lang/noir/pull/5993)\r\n([875cfe6](https://github.com/AztecProtocol/aztec-packages/commit/875cfe649e76d96a2b07a25c870500543566efd1))\r\n* Native world state\r\n([#7516](https://github.com/AztecProtocol/aztec-packages/issues/7516))\r\n([c1aa6f7](https://github.com/AztecProtocol/aztec-packages/commit/c1aa6f73d13e860d5fcee07e82347a7633f8b334))\r\n* New test programs for wasm benchmarking\r\n([#8389](https://github.com/AztecProtocol/aztec-packages/issues/8389))\r\n([0b46e96](https://github.com/AztecProtocol/aztec-packages/commit/0b46e96e8e5d05876a3700b9e50d29d6f349ea6e))\r\n* Output timestamps in prover-stats raw logs\r\n([#8476](https://github.com/AztecProtocol/aztec-packages/issues/8476))\r\n([aa67a14](https://github.com/AztecProtocol/aztec-packages/commit/aa67a14c21e258bf42b9f878fbd5f876980f4d96))\r\n* Rate limit peers in request response p2p interactions\r\n([#8498](https://github.com/AztecProtocol/aztec-packages/issues/8498))\r\n([00146fa](https://github.com/AztecProtocol/aztec-packages/commit/00146fa06361a86f0c6e45c46d8b6dff4d4561bf))\r\n* Refactor NoteGetterOptions::select API\r\n([#8504](https://github.com/AztecProtocol/aztec-packages/issues/8504))\r\n([e527992](https://github.com/AztecProtocol/aztec-packages/commit/e52799256d67e2f992c141784102e9b97b114e49))\r\n* Sync from aztec-packages (https://github.com/noir-lang/noir/pull/5971)\r\n([875cfe6](https://github.com/AztecProtocol/aztec-packages/commit/875cfe649e76d96a2b07a25c870500543566efd1))\r\n* Sync from aztec-packages (https://github.com/noir-lang/noir/pull/6001)\r\n([20d7576](https://github.com/AztecProtocol/aztec-packages/commit/20d75766cc533b3cb024937dd62251329c78b395))\r\n* Use Zac's quicksort algorithm in stdlib sorting\r\n(https://github.com/noir-lang/noir/pull/5940)\r\n([20d7576](https://github.com/AztecProtocol/aztec-packages/commit/20d75766cc533b3cb024937dd62251329c78b395))\r\n* Validators ensure transactions live in their p2p pool before attesting\r\n([#8410](https://github.com/AztecProtocol/aztec-packages/issues/8410))\r\n([bce1eea](https://github.com/AztecProtocol/aztec-packages/commit/bce1eea90deb8fabf2324554681628144f4ee08d))\r\n* Verification key stuff\r\n([#8431](https://github.com/AztecProtocol/aztec-packages/issues/8431))\r\n([11dc8ff](https://github.com/AztecProtocol/aztec-packages/commit/11dc8ff185d74e6e5bc51e85d6bcd6577ac83161))\r\n\r\n\r\n### Bug Fixes\r\n\r\n* Correctly print string tokens\r\n(https://github.com/noir-lang/noir/pull/6021)\r\n([cb20e07](https://github.com/AztecProtocol/aztec-packages/commit/cb20e078dd909656110d133339b2b425e6c3ebb0))\r\n* Enable verifier when deploying the networks\r\n([#8500](https://github.com/AztecProtocol/aztec-packages/issues/8500))\r\n([f6d31f1](https://github.com/AztecProtocol/aztec-packages/commit/f6d31f10365c2d31aef15bb679a7cf97f3172654))\r\n* Error when comptime types are used in runtime code\r\n(https://github.com/noir-lang/noir/pull/5987)\r\n([875cfe6](https://github.com/AztecProtocol/aztec-packages/commit/875cfe649e76d96a2b07a25c870500543566efd1))\r\n* Error when mutating comptime variables in non-comptime code\r\n(https://github.com/noir-lang/noir/pull/6003)\r\n([20d7576](https://github.com/AztecProtocol/aztec-packages/commit/20d75766cc533b3cb024937dd62251329c78b395))\r\n* Fix some mistakes in arithmetic generics docs\r\n(https://github.com/noir-lang/noir/pull/5999)\r\n([20d7576](https://github.com/AztecProtocol/aztec-packages/commit/20d75766cc533b3cb024937dd62251329c78b395))\r\n* Fix using lazily elaborated comptime globals\r\n(https://github.com/noir-lang/noir/pull/5995)\r\n([20d7576](https://github.com/AztecProtocol/aztec-packages/commit/20d75766cc533b3cb024937dd62251329c78b395))\r\n* Help link was outdated (https://github.com/noir-lang/noir/pull/6004)\r\n([20d7576](https://github.com/AztecProtocol/aztec-packages/commit/20d75766cc533b3cb024937dd62251329c78b395))\r\n* Load prover node config from env\r\n([#8525](https://github.com/AztecProtocol/aztec-packages/issues/8525))\r\n([7065962](https://github.com/AztecProtocol/aztec-packages/commit/7065962bb507555bcbb25cb3bbfc2a0a90687000))\r\n* Remove claim_public from fee juice\r\n([#8337](https://github.com/AztecProtocol/aztec-packages/issues/8337))\r\n([dca74ae](https://github.com/AztecProtocol/aztec-packages/commit/dca74aeaa3b25290967e0591025dab8aad6e3ad1))\r\n* Try to move constant terms to one side for arithmetic generics\r\n(https://github.com/noir-lang/noir/pull/6008)\r\n([cb20e07](https://github.com/AztecProtocol/aztec-packages/commit/cb20e078dd909656110d133339b2b425e6c3ebb0))\r\n* Use module name as line after which we'll insert auto-import\r\n(https://github.com/noir-lang/noir/pull/6025)\r\n([cb20e07](https://github.com/AztecProtocol/aztec-packages/commit/cb20e078dd909656110d133339b2b425e6c3ebb0))\r\n\r\n\r\n### Miscellaneous\r\n\r\n* Add some `pub use` and remove unused imports\r\n([#8521](https://github.com/AztecProtocol/aztec-packages/issues/8521))\r\n([8bd0755](https://github.com/AztecProtocol/aztec-packages/commit/8bd0755a40357a0bc3c56ae5f60e7ff71552a69c))\r\n* **bb:** Fix mac build\r\n([#8505](https://github.com/AztecProtocol/aztec-packages/issues/8505))\r\n([32fd347](https://github.com/AztecProtocol/aztec-packages/commit/32fd347f887af57456767bcb7a38070f8c4b2b28)),\r\ncloses\r\n[#8499](https://github.com/AztecProtocol/aztec-packages/issues/8499)\r\n* **bb:** Fix mac build\r\n([#8522](https://github.com/AztecProtocol/aztec-packages/issues/8522))\r\n([986e703](https://github.com/AztecProtocol/aztec-packages/commit/986e70353d28eab48cc0028bf31a2c8d67ffb29d))\r\n* **ci:** Fix bb publishing\r\n([#8486](https://github.com/AztecProtocol/aztec-packages/issues/8486))\r\n([c210c36](https://github.com/AztecProtocol/aztec-packages/commit/c210c36c96102aaf5dcd36419b488d4c146c38a5))\r\n* Fix a load of warnings in aztec-nr\r\n([#8501](https://github.com/AztecProtocol/aztec-packages/issues/8501))\r\n([35dc1e1](https://github.com/AztecProtocol/aztec-packages/commit/35dc1e1be1b182e616f700c6ea6f387bae55db21))\r\n* Protogalaxy verifier matches prover 1\r\n([#8414](https://github.com/AztecProtocol/aztec-packages/issues/8414))\r\n([5a76ec6](https://github.com/AztecProtocol/aztec-packages/commit/5a76ec61fb9dee976cdee8bba8198854d9249bf3))\r\n* Remove RC tracking in mem2reg\r\n(https://github.com/noir-lang/noir/pull/6019)\r\n([cb20e07](https://github.com/AztecProtocol/aztec-packages/commit/cb20e078dd909656110d133339b2b425e6c3ebb0))\r\n* Remove unneeded propose and da oracle\r\n([#8474](https://github.com/AztecProtocol/aztec-packages/issues/8474))\r\n([274a6b7](https://github.com/AztecProtocol/aztec-packages/commit/274a6b73281e5b9a7bc037aaf8888230de7b99a9))\r\n* Replace relative paths to noir-protocol-circuits\r\n([b179c6b](https://github.com/AztecProtocol/aztec-packages/commit/b179c6b31e7d59d8be6e9d0bb54cd319b6a6f458))\r\n* Replace relative paths to noir-protocol-circuits\r\n([1c042be](https://github.com/AztecProtocol/aztec-packages/commit/1c042be39595b848bc4cf9021d7f725650370a59))\r\n* Replace relative paths to noir-protocol-circuits\r\n([1c8409f](https://github.com/AztecProtocol/aztec-packages/commit/1c8409f57dfa0116770bbc0a56521ee2f6d42aec))\r\n* Run mac builds on master\r\n([#8519](https://github.com/AztecProtocol/aztec-packages/issues/8519))\r\n([c458a79](https://github.com/AztecProtocol/aztec-packages/commit/c458a7929697b85d170c42f7e927c658428ec955))\r\n* Single install script for cargo-binstall\r\n(https://github.com/noir-lang/noir/pull/5998)\r\n([20d7576](https://github.com/AztecProtocol/aztec-packages/commit/20d75766cc533b3cb024937dd62251329c78b395))\r\n* Use uint32_t instead of size_t for databus data\r\n([#8479](https://github.com/AztecProtocol/aztec-packages/issues/8479))\r\n([79995c8](https://github.com/AztecProtocol/aztec-packages/commit/79995c84e0f88c1ee72876fd21c50c33830597fc))\r\n</details>\r\n\r\n<details><summary>barretenberg: 0.55.0</summary>\r\n\r\n##\r\n[0.55.0](https://github.com/AztecProtocol/aztec-packages/compare/barretenberg-v0.54.0...barretenberg-v0.55.0)\r\n(2024-09-13)\r\n\r\n\r\n### ⚠ BREAKING CHANGES\r\n\r\n* Add Not instruction in brillig\r\n([#8488](https://github.com/AztecProtocol/aztec-packages/issues/8488))\r\n* **avm:** variants for CAST/NOT opcode\r\n([#8497](https://github.com/AztecProtocol/aztec-packages/issues/8497))\r\n* **avm:** variants for REVERT opcode\r\n([#8487](https://github.com/AztecProtocol/aztec-packages/issues/8487))\r\n\r\n### Features\r\n\r\n* (bb) remove redundant constraints on field/group elements when using\r\ngoblin plonk\r\n([#8409](https://github.com/AztecProtocol/aztec-packages/issues/8409))\r\n([12a093d](https://github.com/AztecProtocol/aztec-packages/commit/12a093d25e0c32fed5eceee424b24111ad2f14a4))\r\n* Add Not instruction in brillig\r\n([#8488](https://github.com/AztecProtocol/aztec-packages/issues/8488))\r\n([ceda361](https://github.com/AztecProtocol/aztec-packages/commit/ceda3612f0d12d43bffde9c9b992a432d1a13d75))\r\n* **avm:** Parallelize polynomial alloc and set\r\n([#8520](https://github.com/AztecProtocol/aztec-packages/issues/8520))\r\n([7e73531](https://github.com/AztecProtocol/aztec-packages/commit/7e7353195592d503a92c7222788c739006fa81fc))\r\n* **avm:** Variants for CAST/NOT opcode\r\n([#8497](https://github.com/AztecProtocol/aztec-packages/issues/8497))\r\n([bc609fa](https://github.com/AztecProtocol/aztec-packages/commit/bc609fa457b029dee0dc19818e3709a6ea9564ab))\r\n* **avm:** Variants for REVERT opcode\r\n([#8487](https://github.com/AztecProtocol/aztec-packages/issues/8487))\r\n([a0c8915](https://github.com/AztecProtocol/aztec-packages/commit/a0c8915ccf00fe1c329bf87760d28b3c42725cf1))\r\n* **bb:** Iterative constexpr_for\r\n([#8502](https://github.com/AztecProtocol/aztec-packages/issues/8502))\r\n([02c3330](https://github.com/AztecProtocol/aztec-packages/commit/02c333028bf186f0472738f4a5c39d36f4980941))\r\n* Checking finalized sizes + a test of two folding verifiers\r\n([#8503](https://github.com/AztecProtocol/aztec-packages/issues/8503))\r\n([d9e3f4d](https://github.com/AztecProtocol/aztec-packages/commit/d9e3f4d42118d16b343b818a0649e6cfbc14ea31))\r\n* Native world state\r\n([#7516](https://github.com/AztecProtocol/aztec-packages/issues/7516))\r\n([c1aa6f7](https://github.com/AztecProtocol/aztec-packages/commit/c1aa6f73d13e860d5fcee07e82347a7633f8b334))\r\n* New test programs for wasm benchmarking\r\n([#8389](https://github.com/AztecProtocol/aztec-packages/issues/8389))\r\n([0b46e96](https://github.com/AztecProtocol/aztec-packages/commit/0b46e96e8e5d05876a3700b9e50d29d6f349ea6e))\r\n* Verification key stuff\r\n([#8431](https://github.com/AztecProtocol/aztec-packages/issues/8431))\r\n([11dc8ff](https://github.com/AztecProtocol/aztec-packages/commit/11dc8ff185d74e6e5bc51e85d6bcd6577ac83161))\r\n\r\n\r\n### Miscellaneous\r\n\r\n* **bb:** Fix mac build\r\n([#8505](https://github.com/AztecProtocol/aztec-packages/issues/8505))\r\n([32fd347](https://github.com/AztecProtocol/aztec-packages/commit/32fd347f887af57456767bcb7a38070f8c4b2b28)),\r\ncloses\r\n[#8499](https://github.com/AztecProtocol/aztec-packages/issues/8499)\r\n* **bb:** Fix mac build\r\n([#8522](https://github.com/AztecProtocol/aztec-packages/issues/8522))\r\n([986e703](https://github.com/AztecProtocol/aztec-packages/commit/986e70353d28eab48cc0028bf31a2c8d67ffb29d))\r\n* Protogalaxy verifier matches prover 1\r\n([#8414](https://github.com/AztecProtocol/aztec-packages/issues/8414))\r\n([5a76ec6](https://github.com/AztecProtocol/aztec-packages/commit/5a76ec61fb9dee976cdee8bba8198854d9249bf3))\r\n* Use uint32_t instead of size_t for databus data\r\n([#8479](https://github.com/AztecProtocol/aztec-packages/issues/8479))\r\n([79995c8](https://github.com/AztecProtocol/aztec-packages/commit/79995c84e0f88c1ee72876fd21c50c33830597fc))\r\n</details>\r\n\r\n---\r\nThis PR was generated with [Release\r\nPlease](https://github.com/googleapis/release-please). See\r\n[documentation](https://github.com/googleapis/release-please#release-please).",
          "timestamp": "2024-09-13T11:37:51Z",
          "tree_id": "460763e95781ab2af765a52dae8d00553dd9f6ba",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/bcec12dbf79b658406dc21083f8fdeef8962085e"
        },
        "date": 1726228135987,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 12891.928535999994,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 9325.687269 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5079.353999000005,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4673.958886 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 38381.521504,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 38381521000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14660.073409,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14660073000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3597192727,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3597192727 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 136131616,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 136131616 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 2958710689,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2958710689 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 113358571,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 113358571 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "codygunton@gmail.com",
            "name": "Cody Gunton",
            "username": "codygunton"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "58882b199081b18e33fb65f8d05cfce7fe458f1e",
          "message": "refactor: Protogalaxy verifier matches prover 2 (#8477)\n\nThis PR reorganizes the native folding verifier to better match the\r\nfolding prover. This amounts to encapsulating some logic in functions\r\nand a mild reshuffling. It's tempting to also implement the verifier as\r\na series of pure-ish round functions, but I don't do that for lack of\r\ntime.",
          "timestamp": "2024-09-13T08:58:38-04:00",
          "tree_id": "d4ded2c47bac57ee3ca88ecbf008431d14d6aa9e",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/58882b199081b18e33fb65f8d05cfce7fe458f1e"
        },
        "date": 1726233071069,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 12839.47444399999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 9257.314761000001 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5099.0555279999935,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4671.22544 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 38559.83670000001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 38559836000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14635.617216,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14635618000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3578589660,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3578589660 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 135264683,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 135264683 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 2925339164,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2925339164 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 113281775,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 113281775 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexghr@users.noreply.github.com",
            "name": "Alex Gherghisan",
            "username": "alexghr"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aab87733b4381d8d64b85f5e5a6bff4e31ee1abd",
          "message": "fix: native world state test issues (#8546)\n\nThis PR fixes the flaky Jest tests that were comparing the C++\r\nWorldState against the JS implementation.\r\n\r\nThe issue stemmed from the `WorldState::get_state_reference` function\r\nreading state reference for all five trees in parallel and saving that\r\ninformation in a `std::unordered_map`. Concurrent writes to a\r\n`std::unordered_map` [are\r\ninvalid](https://devblogs.microsoft.com/oldnewthing/20231103-00/?p=108966)\r\nso I've added a lock to ensure that only one thread writes at a time.\r\nSimultaneous reads are fine though.",
          "timestamp": "2024-09-16T11:08:09+01:00",
          "tree_id": "3b663f039343f3698013f2bb4b0de35483347c81",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/aab87733b4381d8d64b85f5e5a6bff4e31ee1abd"
        },
        "date": 1726481903375,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 12908.682877000017,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 9257.660694000002 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5109.11256,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4717.756773 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 38327.397527,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 38327397000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14658.544392,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14658545000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3613244945,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3613244945 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 137259628,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 137259628 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 2962647334,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2962647334 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 113527785,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 113527785 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lucasxia01@gmail.com",
            "name": "Lucas Xia",
            "username": "lucasxia01"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c3ad163dbcf79067b49553f1c139c49a6aa066cb",
          "message": "chore: Moves add gate out of aux (#8541)\n\nResolves https://github.com/AztecProtocol/barretenberg/issues/913.\r\n\r\nMoves the add gate in aux to the arithmetic block instead. Adds some\r\ntests to check the partitioning of selectors into their blocks.\r\n\r\nThis used to be blocked by the recursion limit in Plonk (as in this change would've bumped us over the limit), but we don't\r\ncare about that anymore (because it's double_verify_proof already goes over 2^19).",
          "timestamp": "2024-09-16T22:01:52Z",
          "tree_id": "b7f17aa771b6009b4b178a3054d12fcb84b536b8",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/c3ad163dbcf79067b49553f1c139c49a6aa066cb"
        },
        "date": 1726524799888,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 12786.754499000011,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 9327.253631 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5068.5812840000035,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4688.537831000001 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 38141.85167499999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 38141851000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14527.160270999997,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14527160000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3610663401,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3610663401 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 136642405,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 136642405 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 2972482515,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2972482515 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 113856029,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 113856029 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexghr@users.noreply.github.com",
            "name": "Alex Gherghisan",
            "username": "alexghr"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ee21583aea137eea31cb1b4e6e0643061ef0d59f",
          "message": "chore: 7791: Disable world_state test suite (#8594)\n\nCherry picking a commit from #8531\r\n\r\nCo-authored-by: jeanmon <jean@aztecprotocol.com>",
          "timestamp": "2024-09-17T13:02:27Z",
          "tree_id": "ec1453a5c2bf3c49eec35de9b2551f91eb6a2142",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/ee21583aea137eea31cb1b4e6e0643061ef0d59f"
        },
        "date": 1726578952886,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 12790.927277000008,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 9280.466177 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5078.173162000013,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4677.550386 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 38105.954957,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 38105955000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14531.602249000003,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14531603000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3655785058,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3655785058 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 135770542,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 135770542 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 2942975027,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2942975027 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 112775950,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 112775950 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AztecProtocol",
            "username": "AztecProtocol"
          },
          "committer": {
            "name": "AztecProtocol",
            "username": "AztecProtocol"
          },
          "id": "5a8f716c8ccaba8eb73420b6770d167c6337820a",
          "message": "chore(master): Release 0.55.1",
          "timestamp": "2024-09-17T14:58:32Z",
          "url": "https://github.com/AztecProtocol/aztec-packages/pull/8533/commits/5a8f716c8ccaba8eb73420b6770d167c6337820a"
        },
        "date": 1726585793605,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 13345.780553999986,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 9197.849723 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5874.508230000018,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4650.927584000001 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 38117.038974,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 38117039000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 16944.340642,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16944341000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3605569186,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3605569186 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 135711274,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 135711274 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 2954511877,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2954511877 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 112496803,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 112496803 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49558828+AztecBot@users.noreply.github.com",
            "name": "Aztec Bot",
            "username": "AztecBot"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "25d75ffd511024332797836d94ed1229913e5ce2",
          "message": "chore(master): Release 0.55.1 (#8533)\n\n:robot: I have created a release *beep* *boop*\r\n---\r\n\r\n\r\n<details><summary>aztec-package: 0.55.1</summary>\r\n\r\n##\r\n[0.55.1](https://github.com/AztecProtocol/aztec-packages/compare/aztec-package-v0.55.0...aztec-package-v0.55.1)\r\n(2024-09-17)\r\n\r\n\r\n### Features\r\n\r\n* CI deploy on sepolia\r\n([#8514](https://github.com/AztecProtocol/aztec-packages/issues/8514))\r\n([54f0344](https://github.com/AztecProtocol/aztec-packages/commit/54f0344b0fd5eba26d0c02641533ad9f18616de1))\r\n* Tx verification & peer scoring on p2p layer. bot support for\r\nEasyPrivateToken\r\n([#8298](https://github.com/AztecProtocol/aztec-packages/issues/8298))\r\n([beb651f](https://github.com/AztecProtocol/aztec-packages/commit/beb651f241fe71776689bedc764be650dfd5ae0c))\r\n\r\n\r\n### Miscellaneous\r\n\r\n* Remove ARCHIVER_L1_START_BLOCK\r\n([#8554](https://github.com/AztecProtocol/aztec-packages/issues/8554))\r\n([bc8d461](https://github.com/AztecProtocol/aztec-packages/commit/bc8d461f6fc20c55aa94647dc671ecb59f52cad2))\r\n</details>\r\n\r\n<details><summary>barretenberg.js: 0.55.1</summary>\r\n\r\n##\r\n[0.55.1](https://github.com/AztecProtocol/aztec-packages/compare/barretenberg.js-v0.55.0...barretenberg.js-v0.55.1)\r\n(2024-09-17)\r\n\r\n\r\n### Miscellaneous\r\n\r\n* **barretenberg.js:** Synchronize aztec-packages versions\r\n</details>\r\n\r\n<details><summary>aztec-packages: 0.55.1</summary>\r\n\r\n##\r\n[0.55.1](https://github.com/AztecProtocol/aztec-packages/compare/aztec-packages-v0.55.0...aztec-packages-v0.55.1)\r\n(2024-09-17)\r\n\r\n\r\n### Features\r\n\r\n* `TXE::store_note_in_cache` --&gt; `TXE::add_note`\r\n([#8547](https://github.com/AztecProtocol/aztec-packages/issues/8547))\r\n([5a6aaeb](https://github.com/AztecProtocol/aztec-packages/commit/5a6aaeb2cacb1e1cbcda8b93441e9d4cf4b912fa))\r\n* Add a `comptime` string type for string handling at compile-time\r\n(https://github.com/noir-lang/noir/pull/6026)\r\n([cd7983a](https://github.com/AztecProtocol/aztec-packages/commit/cd7983a0b7692629428e63c58deb4d4920353d4b))\r\n* CI deploy on sepolia\r\n([#8514](https://github.com/AztecProtocol/aztec-packages/issues/8514))\r\n([54f0344](https://github.com/AztecProtocol/aztec-packages/commit/54f0344b0fd5eba26d0c02641533ad9f18616de1))\r\n* Default to outputting witness with file named after package\r\n(https://github.com/noir-lang/noir/pull/6031)\r\n([cd7983a](https://github.com/AztecProtocol/aztec-packages/commit/cd7983a0b7692629428e63c58deb4d4920353d4b))\r\n* Let LSP suggest trait impl methods as you are typing them\r\n(https://github.com/noir-lang/noir/pull/6029)\r\n([cd7983a](https://github.com/AztecProtocol/aztec-packages/commit/cd7983a0b7692629428e63c58deb4d4920353d4b))\r\n* NFT with \"transient\" storage shield flow\r\n([#8129](https://github.com/AztecProtocol/aztec-packages/issues/8129))\r\n([578f67c](https://github.com/AztecProtocol/aztec-packages/commit/578f67ca7df6ea0c66265bf60767803f692d46f4))\r\n* Optimize allocating immediate amounts of memory\r\n([#8579](https://github.com/AztecProtocol/aztec-packages/issues/8579))\r\n([e0185e7](https://github.com/AztecProtocol/aztec-packages/commit/e0185e75e65df08b5334856f8bf63fa3aed7049a))\r\n* Spartan iac\r\n([#8455](https://github.com/AztecProtocol/aztec-packages/issues/8455))\r\n([16fba46](https://github.com/AztecProtocol/aztec-packages/commit/16fba46e722e0178f5ebfe4b9562e445d12386a8))\r\n* Sync from aztec-packages (https://github.com/noir-lang/noir/pull/6028)\r\n([cd7983a](https://github.com/AztecProtocol/aztec-packages/commit/cd7983a0b7692629428e63c58deb4d4920353d4b))\r\n* Tx verification & peer scoring on p2p layer. bot support for\r\nEasyPrivateToken\r\n([#8298](https://github.com/AztecProtocol/aztec-packages/issues/8298))\r\n([beb651f](https://github.com/AztecProtocol/aztec-packages/commit/beb651f241fe71776689bedc764be650dfd5ae0c))\r\n* Unconstraining keys in unconstrained encryption\r\n([#7912](https://github.com/AztecProtocol/aztec-packages/issues/7912))\r\n([eb9275a](https://github.com/AztecProtocol/aztec-packages/commit/eb9275a3b7eee4bb76c440dc7307caec4f9e16bd))\r\n* Update args hash to be a flat poseidon\r\n([#8571](https://github.com/AztecProtocol/aztec-packages/issues/8571))\r\n([0c54224](https://github.com/AztecProtocol/aztec-packages/commit/0c5422446de40a5824daa5af33cad1ec015589a0))\r\n* Use poseidon for fn selectors\r\n([#8239](https://github.com/AztecProtocol/aztec-packages/issues/8239))\r\n([41891db](https://github.com/AztecProtocol/aztec-packages/commit/41891dbd6c9022fd9ad2e8e66e073782a1798887))\r\n\r\n\r\n### Bug Fixes\r\n\r\n* Disable side-effects for no_predicates functions\r\n(https://github.com/noir-lang/noir/pull/6027)\r\n([cd7983a](https://github.com/AztecProtocol/aztec-packages/commit/cd7983a0b7692629428e63c58deb4d4920353d4b))\r\n* Native world state test issues\r\n([#8546](https://github.com/AztecProtocol/aztec-packages/issues/8546))\r\n([aab8773](https://github.com/AztecProtocol/aztec-packages/commit/aab87733b4381d8d64b85f5e5a6bff4e31ee1abd))\r\n* Remove special case for epoch 0\r\n([#8549](https://github.com/AztecProtocol/aztec-packages/issues/8549))\r\n([b035d01](https://github.com/AztecProtocol/aztec-packages/commit/b035d012a875772ffdf523c112aa70777300c047))\r\n* Serialize AvmVerificationKeyData\r\n([#8529](https://github.com/AztecProtocol/aztec-packages/issues/8529))\r\n([78c94a4](https://github.com/AztecProtocol/aztec-packages/commit/78c94a4f316605bf6f27c8e466d7c000a486e593))\r\n\r\n\r\n### Miscellaneous\r\n\r\n* 7791: Disable world_state test suite\r\n([#8594](https://github.com/AztecProtocol/aztec-packages/issues/8594))\r\n([ee21583](https://github.com/AztecProtocol/aztec-packages/commit/ee21583aea137eea31cb1b4e6e0643061ef0d59f))\r\n* Add jq to aztec image\r\n([#8542](https://github.com/AztecProtocol/aztec-packages/issues/8542))\r\n([a7fb791](https://github.com/AztecProtocol/aztec-packages/commit/a7fb791ffaf398b5efd5fb64090a2b0b6a7b6685))\r\n* Add sync suite\r\n([#8550](https://github.com/AztecProtocol/aztec-packages/issues/8550))\r\n([ce0a9db](https://github.com/AztecProtocol/aztec-packages/commit/ce0a9dbd87d4371a8b6dd11eb87907fb1dd48030))\r\n* **ci:** Action to redo typo PRs\r\n([#8553](https://github.com/AztecProtocol/aztec-packages/issues/8553))\r\n([3ed5879](https://github.com/AztecProtocol/aztec-packages/commit/3ed5879d486eb20bffdfe9084fed2fb9eb681d26))\r\n* **ci:** Fix master\r\n([#8534](https://github.com/AztecProtocol/aztec-packages/issues/8534))\r\n([47c368f](https://github.com/AztecProtocol/aztec-packages/commit/47c368f991116d4637f544f2cb71ef146ed201de))\r\n* **ci:** Fix redo-typo-pr.yml\r\n([abf9802](https://github.com/AztecProtocol/aztec-packages/commit/abf9802b8ace37fc6eff9034927fb4ab29feea33))\r\n* **ci:** Fix redo-typo-pr.yml\r\n([#8555](https://github.com/AztecProtocol/aztec-packages/issues/8555))\r\n([7f1673c](https://github.com/AztecProtocol/aztec-packages/commit/7f1673cb5b7a472368d1b44912fda72c8be31636))\r\n* **ci:** Hotfix\r\n([ffd31aa](https://github.com/AztecProtocol/aztec-packages/commit/ffd31aa32a02c212b14487b15b79bcff8b14293a))\r\n* **ci:** Hotfix arm ci\r\n([979f267](https://github.com/AztecProtocol/aztec-packages/commit/979f2674b639d84d2b45d1c419e41aa613bd94e9))\r\n* **ci:** Optimize disk usage in arm run\r\n([#8564](https://github.com/AztecProtocol/aztec-packages/issues/8564))\r\n([33e6aa4](https://github.com/AztecProtocol/aztec-packages/commit/33e6aa41b3d87d54eafbcf68ddcaedac6df13204))\r\n* **ci:** Use labels and if branch=master to control jobs\r\n([#8508](https://github.com/AztecProtocol/aztec-packages/issues/8508))\r\n([68a2226](https://github.com/AztecProtocol/aztec-packages/commit/68a222607ecd9584c46a0499bce568d1d7ec7ce7))\r\n* GitHub Actions Deployments to Amazon EKS\r\n([#8563](https://github.com/AztecProtocol/aztec-packages/issues/8563))\r\n([6fae8f0](https://github.com/AztecProtocol/aztec-packages/commit/6fae8f031749b1aaede2033f5de4b61fecf98b6b))\r\n* Moves add gate out of aux\r\n([#8541](https://github.com/AztecProtocol/aztec-packages/issues/8541))\r\n([c3ad163](https://github.com/AztecProtocol/aztec-packages/commit/c3ad163dbcf79067b49553f1c139c49a6aa066cb))\r\n* Protogalaxy verifier matches prover 2\r\n([#8477](https://github.com/AztecProtocol/aztec-packages/issues/8477))\r\n([58882b1](https://github.com/AztecProtocol/aztec-packages/commit/58882b199081b18e33fb65f8d05cfce7fe458f1e))\r\n* Redo typo PR by ankushgoel27\r\n([#8595](https://github.com/AztecProtocol/aztec-packages/issues/8595))\r\n([7ca6d24](https://github.com/AztecProtocol/aztec-packages/commit/7ca6d24d3fdef17e9d71a898dbca5206a166a624))\r\n* Redo typo PR by Ocheretovich\r\n([#8559](https://github.com/AztecProtocol/aztec-packages/issues/8559))\r\n([c4296ba](https://github.com/AztecProtocol/aztec-packages/commit/c4296bab075577fad0c7e1a04587e0995902b656))\r\n* Redo typo PR by Olexandr88\r\n([#8560](https://github.com/AztecProtocol/aztec-packages/issues/8560))\r\n([e35d148](https://github.com/AztecProtocol/aztec-packages/commit/e35d14864cb6fe3727f5a93f3037786add10beb4))\r\n* Redo typo PR by skaunov\r\n([#8557](https://github.com/AztecProtocol/aztec-packages/issues/8557))\r\n([8a1e7c3](https://github.com/AztecProtocol/aztec-packages/commit/8a1e7c33735d60b479fc70a32dcde18d3ce2d97a))\r\n* Release Noir(0.34.0) (https://github.com/noir-lang/noir/pull/5692)\r\n([cd7983a](https://github.com/AztecProtocol/aztec-packages/commit/cd7983a0b7692629428e63c58deb4d4920353d4b))\r\n* Remove ARCHIVER_L1_START_BLOCK\r\n([#8554](https://github.com/AztecProtocol/aztec-packages/issues/8554))\r\n([bc8d461](https://github.com/AztecProtocol/aztec-packages/commit/bc8d461f6fc20c55aa94647dc671ecb59f52cad2))\r\n* Remove redundant e2e tests and organize\r\n([#8561](https://github.com/AztecProtocol/aztec-packages/issues/8561))\r\n([de2b775](https://github.com/AztecProtocol/aztec-packages/commit/de2b775b07166a14093bbfec857403e985fcffbd))\r\n* Remove unused imports\r\n([#8556](https://github.com/AztecProtocol/aztec-packages/issues/8556))\r\n([e11242e](https://github.com/AztecProtocol/aztec-packages/commit/e11242e2ab2fd1eef0a17db2e0714cd289b2fec1))\r\n* Replace relative paths to noir-protocol-circuits\r\n([2336986](https://github.com/AztecProtocol/aztec-packages/commit/2336986463c660fe67b2e46b375d2bcf3531cdb9))\r\n* Replace relative paths to noir-protocol-circuits\r\n([9668ed5](https://github.com/AztecProtocol/aztec-packages/commit/9668ed5c548a24c69cdacfbc58d544adf47d3272))\r\n</details>\r\n\r\n<details><summary>barretenberg: 0.55.1</summary>\r\n\r\n##\r\n[0.55.1](https://github.com/AztecProtocol/aztec-packages/compare/barretenberg-v0.55.0...barretenberg-v0.55.1)\r\n(2024-09-17)\r\n\r\n\r\n### Bug Fixes\r\n\r\n* Native world state test issues\r\n([#8546](https://github.com/AztecProtocol/aztec-packages/issues/8546))\r\n([aab8773](https://github.com/AztecProtocol/aztec-packages/commit/aab87733b4381d8d64b85f5e5a6bff4e31ee1abd))\r\n\r\n\r\n### Miscellaneous\r\n\r\n* 7791: Disable world_state test suite\r\n([#8594](https://github.com/AztecProtocol/aztec-packages/issues/8594))\r\n([ee21583](https://github.com/AztecProtocol/aztec-packages/commit/ee21583aea137eea31cb1b4e6e0643061ef0d59f))\r\n* Moves add gate out of aux\r\n([#8541](https://github.com/AztecProtocol/aztec-packages/issues/8541))\r\n([c3ad163](https://github.com/AztecProtocol/aztec-packages/commit/c3ad163dbcf79067b49553f1c139c49a6aa066cb))\r\n* Protogalaxy verifier matches prover 2\r\n([#8477](https://github.com/AztecProtocol/aztec-packages/issues/8477))\r\n([58882b1](https://github.com/AztecProtocol/aztec-packages/commit/58882b199081b18e33fb65f8d05cfce7fe458f1e))\r\n</details>\r\n\r\n---\r\nThis PR was generated with [Release\r\nPlease](https://github.com/googleapis/release-please). See\r\n[documentation](https://github.com/googleapis/release-please#release-please).",
          "timestamp": "2024-09-17T14:58:26Z",
          "tree_id": "7c1f7d6c305f48b061e50e2e54fadd5c958b1c7a",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/25d75ffd511024332797836d94ed1229913e5ce2"
        },
        "date": 1726586006621,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 12792.118813000001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 9279.255403000001 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5120.80684099999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4729.142446000001 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 38140.915544,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 38140915000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14647.892044999999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14647892000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3615994480,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3615994480 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 138415887,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 138415887 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 2976994343,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2976994343 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 114748946,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 114748946 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "47281315+guipublic@users.noreply.github.com",
            "name": "guipublic",
            "username": "guipublic"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e3ea298fd1f7326199e6e35b3523aadb2b12a925",
          "message": "chore: add more cases for assert_equal conversion (#8446)\n\nTransform arithmetic gate of the kind a==b into a copy constraint\r\nbetween a and b, as long as a or b is already constrained. In that case,\r\nwe mark both a and b as constrained.",
          "timestamp": "2024-09-17T17:49:53+02:00",
          "tree_id": "6ca9b61c67acbf3e0dcf2b009bbbf916af64ecd7",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/e3ea298fd1f7326199e6e35b3523aadb2b12a925"
        },
        "date": 1726588979631,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 12810.924122000017,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 9271.810128000001 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5117.173107,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4744.052311 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 38350.723408,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 38350724000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14579.198445,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14579199000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 3619040250,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3619040250 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 135328941,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 135328941 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 2978075314,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2978075314 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 113060849,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 113060849 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98505400+ledwards2225@users.noreply.github.com",
            "name": "ledwards2225",
            "username": "ledwards2225"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1c7b06d6621d9873f84147b2b7f1f22bf21bbacb",
          "message": "feat: use new IVC scheme (#8480)\n\nReplaces the old `ClientIvc` with `AztecIvc` (renamed to `ClientIVC`).\r\nThis was facilitated by the introduction of `auto_verify_mode` which\r\nmakes the new class behave a bit like the old one by automatically\r\n\"completing\" the kernel circuits with recursive verifiers if\r\n`auto_verify_mode == true`. (Note: a notable difference is that the old\r\nmodel appended recursion logic to _any_ circuit, not just kernels. This\r\nchange means that it does not make sense to accumulate an odd number of\r\ncircuits into the IVC).",
          "timestamp": "2024-09-17T10:07:10-07:00",
          "tree_id": "2559931c3439b30ce63d7ea3a89142e652f18121",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/1c7b06d6621d9873f84147b2b7f1f22bf21bbacb"
        },
        "date": 1726593872758,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 34453.184685999986,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 31931.99281900001 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5111.101091999998,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4694.678341000001 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 100513.030599,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 100513031000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14607.624747000003,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14607623000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 8682744319,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8682744319 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 152341570,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 152341570 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 6949782032,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6949782032 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 128306188,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 128306188 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "159419107+DanielKotov@users.noreply.github.com",
            "name": "DanielKotov",
            "username": "DanielKotov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f2a13309f544bbd83b593e6a6207d49d9ef48b74",
          "message": "fix: boomerang variable in sha256 hash function (#8581)\n\nStatic analyzer found boomerang variable in the function extend_witness.\r\n\r\nThe problem is that variable w_out wasn't connected with variable\r\nw_out_raw in the function extend_witness in sha256 hash function. As a\r\nresult, you can put random variable in the extend_witness.\r\n\r\nTest was created to prove this issue. You can modify a result of\r\nfunction extend_witness, and the circuit will be correct.\r\n\r\nAlso function extend_witness was patched to remove this issue.\r\n\r\n---------\r\n\r\nCo-authored-by: Rumata888 <isennovskiy@gmail.com>",
          "timestamp": "2024-09-17T18:07:53+01:00",
          "tree_id": "5cfec8ee948eaed5649f3ee042016ce5a4a94a1b",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/f2a13309f544bbd83b593e6a6207d49d9ef48b74"
        },
        "date": 1726593968592,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 35631.49408200002,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 32574.893427000006 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5797.5111220000035,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4582.833249 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 99487.04701299999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 99487048000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 16605.353931999998,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16605354000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 8489313581,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8489313581 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 151350760,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 151350760 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 6949777854,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6949777854 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 126241372,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 126241372 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "72797635+Savio-Sou@users.noreply.github.com",
            "name": "Savio",
            "username": "Savio-Sou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd46ddd96539f2db466d1116dabdb838d2a807e7",
          "message": "chore(bb readme): Document how to Honk Noir programs (#7638)\n\nDocument:\r\n- Basic example of how to use `bb prove_ultra_honk`, `bb\r\nwrite_vk_ultra_honk` and `bb verify_ultra_honk` with Noir\r\n- Preliminary example of how to use `bb contract_ultra_honk` as\r\n@Maddiaa0 shared (to confirm validity pending a new BB release is cut\r\nwith the functionality)\r\n- Minor note on `bb <command>_mega_honk` for people wanting to use\r\nMegaHonk\r\n\r\n~TODO: Wait for Barretenberg v0.47.1 <> Noir compatibility and complete\r\nSolidity verifier workflow~ Done\r\n\r\nTo consider in future Issue(s):\r\nRecommend `prove_keccak_ultra_honk` as default; `prove_ultra_honk`\r\n(Poseidon) as advanced proving for off-chain + recursion use cases only",
          "timestamp": "2024-09-18T02:18:47+08:00",
          "tree_id": "b462eee61c549d87699573a15e0155889e80fa78",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/cd46ddd96539f2db466d1116dabdb838d2a807e7"
        },
        "date": 1726598202772,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 35884.94334799998,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 32867.373821999994 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5127.10937300001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4743.948907 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 99783.68190000003,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 99783680000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14566.586744,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14566587000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 8547631794,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8547631794 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 152736684,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 152736684 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 6941051053,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6941051053 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 126831798,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 126831798 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "132435771+jeanmon@users.noreply.github.com",
            "name": "Jean M",
            "username": "jeanmon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dd09f057e97ac1bba7b3fbf29b50737ebe5ca76f",
          "message": "feat(avm): avm recursive TS/Noir integration (#8531)\n\nResolves #7791",
          "timestamp": "2024-09-17T19:34:35Z",
          "tree_id": "05912541ac61b0f3a86c26e5b11000d49e680181",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/dd09f057e97ac1bba7b3fbf29b50737ebe5ca76f"
        },
        "date": 1726602653841,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 35732.25560399999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 32782.650429999994 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5073.815839000005,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4681.8837490000005 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 99071.12806600002,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 99071128000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14536.200923999999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14536201000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 8477016758,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8477016758 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 153252881,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 153252881 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 6910810922,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6910810922 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 127532559,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 127532559 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "105737703+iakovenkos@users.noreply.github.com",
            "name": "iakovenkos",
            "username": "iakovenkos"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a4f61b39c39bf01a1071b52bbf042408f29d5564",
          "message": "refactor: Protogalaxy recursive verifier matches native verifier (#8568)\n\nContinuation of PG refactoring\r\n\r\n- PG recursive verifier made similar to native PG verifier\r\n- In recursive setting: accumulator is mutated in place. \r\n- Sharing the code with prover_verifier_shared for functions that\r\ncompute powers of round challenges and update gate challenges\r\n- Renaming + Constifying a lot",
          "timestamp": "2024-09-17T16:20:19-04:00",
          "tree_id": "1df387ff8a7d7bd043de9aca225be8b871a75fee",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/a4f61b39c39bf01a1071b52bbf042408f29d5564"
        },
        "date": 1726605466969,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 34307.31013900001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 31796.502915999994 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5074.393954000001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4636.150490999999 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 100058.847086,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 100058847000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14510.670655,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14510671000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 8604802654,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8604802654 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 154480379,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 154480379 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 6921775776,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6921775776 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 125932802,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 125932802 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "adam.domurad@gmail.com",
            "name": "ludamad",
            "username": "ludamad"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "679752542edf1667d58e8839aca05d2b9fcc7da6",
          "message": "fix(world_state): fix race conditions in WorldState and IndexedTree (#8612)\n\nOne caused by me doing a 'mac build' fix, oops. Mac build temporarily\r\nrebroken as no one relies on world_state on mac atm\r\n- reverts bad Signal change, reverts to raw std::atomic\r\n- puts std::mutex as a mutable class member as it guards accesses\r\n- reenables the tests\r\n- minor side-effect: fixes 'the the' usages",
          "timestamp": "2024-09-18T02:13:25Z",
          "tree_id": "fa0f18af77245b95b625705536b2209a371edd7e",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/679752542edf1667d58e8839aca05d2b9fcc7da6"
        },
        "date": 1726626577349,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 34628.88280199999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 31967.855224 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5153.896363000002,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4735.434539000001 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 100016.128505,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 100016129000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14662.097795,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14662098000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 8672839508,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8672839508 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 152168193,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 152168193 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 6973167958,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6973167958 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 127817490,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 127817490 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "fcarreiro@users.noreply.github.com",
            "name": "Facundo",
            "username": "fcarreiro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d5695fcde93cbfda3e45bfa03988a9e72f2dcb59",
          "message": "feat(avm)!: remove tag in NOT (#8606)\n\nCase study to see how it goes.",
          "timestamp": "2024-09-18T10:41:49+01:00",
          "tree_id": "0f528b965dc1ad57d0a3559e674b4dcfb299bf9e",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/d5695fcde93cbfda3e45bfa03988a9e72f2dcb59"
        },
        "date": 1726653561994,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 34503.17599899998,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 31996.355271999997 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5169.986967,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4775.445253 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 99411.364821,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 99411365000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14789.694274,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14789694000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 8609099582,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8609099582 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 150947481,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 150947481 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 7019058224,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 7019058224 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 125413310,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 125413310 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mara@aztecprotocol.com",
            "name": "maramihali",
            "username": "maramihali"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "94339fbfc7c0c822dc1497c113d48f74a89f1bad",
          "message": "chore: create a Gemini prover (#8622)\n\nIn this PR:\r\n* make a `GeminiProver::prove` to not have to replicate all the stages\r\nof the protocol in tests (and soon in the Provers)\r\n* make the Gemini prover and verifier responsible for batching\r\npolynomials and commitments, respectively. While this is not per se part\r\nof the protocol, it does save us a lot of duplication and was\r\nimplemented as part of Zeromorph as well\r\n* replace the terms `gemini_*` back to `fold_*`. Originally, I thought\r\nthat having things that have a folding related naming might be confusing\r\nin the making of Protogalaxy but this data structures will not be\r\nsurfaced anywhere outside the commitment_schemes folders\r\n* attempted bits of cleanup here and there",
          "timestamp": "2024-09-18T15:51:22+01:00",
          "tree_id": "9303a03f3d8b9ee36d530dc6169a6c5dc8c6042b",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/94339fbfc7c0c822dc1497c113d48f74a89f1bad"
        },
        "date": 1726672359579,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 34445.67545199999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 31354.787911000003 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5111.201398000006,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4693.596479000001 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 99563.872125,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 99563872000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14604.515103000002,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14604514000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 8554702195,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8554702195 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 151928553,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 151928553 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 6980419798,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6980419798 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 125795426,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 125795426 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "47112877+dbanks12@users.noreply.github.com",
            "name": "David Banks",
            "username": "dbanks12"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "178573738731e2e74e4119a035f913da39675d85",
          "message": "feat!: add support for u1 in the avm, ToRadix's radix arg is a memory addr (#8570)",
          "timestamp": "2024-09-18T16:42:18Z",
          "tree_id": "f09ff08650f56572e5fed8eb421c3357f0e29b70",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/178573738731e2e74e4119a035f913da39675d85"
        },
        "date": 1726678592240,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 34367.03489499999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 31752.892575999995 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5091.098738,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4636.305603000002 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 100427.212132,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 100427212000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14667.392955000003,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14667393000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 8532292416,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8532292416 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 151704228,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 151704228 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 6941589044,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6941589044 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 127877558,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 127877558 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "fcarreiro@users.noreply.github.com",
            "name": "Facundo",
            "username": "fcarreiro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b6bc7c3f5064255480e3d4443471c2c50007d0ca",
          "message": "feat(avm): return oracle (#8629)",
          "timestamp": "2024-09-18T18:45:20+01:00",
          "tree_id": "0a5c13d7de785d0a5ff5089b2f8967d741a8500a",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/b6bc7c3f5064255480e3d4443471c2c50007d0ca"
        },
        "date": 1726682586580,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 34327.86124800001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 31423.202041999994 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5083.4778000000115,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4686.312184 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 99599.157467,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 99599158000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14572.314676999998,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14572315000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 8511867570,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8511867570 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 152617260,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 152617260 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 6994840683,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6994840683 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 128406848,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 128406848 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "fcarreiro@users.noreply.github.com",
            "name": "Facundo",
            "username": "fcarreiro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0d7536395f2406a22a76f15d01114730c84edc18",
          "message": "chore(avm): simplify bb-prover and other AVM tests (#8627)\n\nIdea\n* since this test is only proving TS -> BB and hints, just prove once.\n* cpp tests run only check-circuit (and will run full proving nightly)\n\nProblem: the test catches some bug, so I disable it for now. Ilyas is\nworking on a fix.",
          "timestamp": "2024-09-18T18:45:25+01:00",
          "tree_id": "5e6431cbc05cfc3ab3d0b6157c67f27c22ca2053",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/0d7536395f2406a22a76f15d01114730c84edc18"
        },
        "date": 1726682688495,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 34453.855825000006,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 31526.71045700001 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5209.434158999997,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4800.642081999999 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 100466.15019100001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 100466150000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14615.517485,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14615518000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 8620062058,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8620062058 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 151865072,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 151865072 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 7063396375,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 7063396375 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 128268116,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 128268116 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "fcarreiro@users.noreply.github.com",
            "name": "Facundo",
            "username": "fcarreiro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3b78058288edbbe18a2eb8c81de5576c8a9478ab",
          "message": "feat(avm): set avm circuit subgroup size (#8537)\n\nI had to make a few changes in this PR, so bear with me.\n\nInside you there are two wolves:\n* The size of the generated trace (which I'll call the \"trace\"): e.g., you run a loop from 1 to 1000 and get a trace with size 1000 (or, if you will, ~2^18 if you add the precomputed columns)\n* The size of the polynomials used for proving: aka circuit subgroup size. We need to set this to some number, since the VK and other things depend on it.\n\nIn this PR I'm setting the latter to 2^21. Is that all? No, because this still needs to work with traces <  2^21. Can't you just resize the trace to 2^21 and call it a day? You can, but then your memory and time will suck.\n\nThis PR therefore does the following: Suppose your trace has size 1000 and you know already our subgroup size is set to 2^21. The polynomials will be initialized with a real size of 1000 rows, and a virtual size of 2^21. Then the values will be set from our generated trace.\n* This is far better in terms of memory because you only \"pay for what you use\"*.\n* This is also far better in terms of time, because resizing the trace to 2^21 takes _forever_ (like 20s+). This is because we currently use `std::vector` which forces the initialization of every field, even if you previously reserved memory (which btw is fast).\n\nExtra: I also did some cleanups, in particular I try to rely less on environment variables and have a clear flow separation between \"prod\" and tests.\n* bb avm_prove only runs check circuit if you really ask for it.\n* bb avm_prove uses full proving by default (all range checks and precomputed tables). This will in particular help with a more realistic devnet/testnet.\n* tests manually set the above options\n* check-circuit only checks rows up to the \"trace\" size; this should make it faster and still sound.\n* the 2^21 size does not (effectively) affect check-circuit\n\nResults: I'm running [this program](https://aztecprotocol.slack.com/archives/C04DL2L1UP2/p1726072481664099?thread_ts=1726066963.338779&cid=C04DL2L1UP2), which at 2^22 rows took 6 minutes and 280GB ram. Let's then suppose that for 2^21 it would've taken 3 minutes and 140GB ram.\n* After this PR, proving takes 49 seconds, and 31GB ram. (note that the time gains include as well the last few PRs)\n\n*that is, if you use 1000 rows, you allocate 1000 rows. Sparcity is not yet taken into account. We need some more changes for that.",
          "timestamp": "2024-09-18T20:58:12+01:00",
          "tree_id": "ec719e9bbdb65edf6d41c962ba985d572d5bd739",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/3b78058288edbbe18a2eb8c81de5576c8a9478ab"
        },
        "date": 1726690468439,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 34534.05058300001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 31890.514240999997 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5092.531742000006,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4705.447382000001 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 99315.197722,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 99315198000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14625.478427999999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14625479000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 8608850086,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8608850086 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 152497694,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 152497694 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 6986861723,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6986861723 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 125798624,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 125798624 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "adam.domurad@gmail.com",
            "name": "ludamad",
            "username": "ludamad"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e4172318af81ac2ac8535c89d3e5afc72d33ba29",
          "message": "feat(avm): avm recursive TS/Noir integration (#8611)\n\nReverts AztecProtocol/aztec-packages#8610\r\n\r\n@jeanmon I have put an e2e-all label on this as it has broke master with\r\nmy changes, unfortunately, it seems we need to make sure we're not\r\nimporting jest mock outside of a dev setting\r\n\r\n---------\r\n\r\nCo-authored-by: jeanmon <jean@aztecprotocol.com>",
          "timestamp": "2024-09-18T21:48:03Z",
          "tree_id": "b9c64623e0ec47f2a310557506c89256c35bde11",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/e4172318af81ac2ac8535c89d3e5afc72d33ba29"
        },
        "date": 1726697092297,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 34725.06695799999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 32181.748418999996 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5180.609067999995,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4795.414558 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 99708.02511599999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 99708026000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14738.087916,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14738088000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 8630409294,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8630409294 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 152862691,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 152862691 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 7079316974,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 7079316974 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 125167764,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 125167764 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "132435771+jeanmon@users.noreply.github.com",
            "name": "Jean M",
            "username": "jeanmon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "facff7fd0b6ea57e91f7d3e3863435655d8b48ea",
          "message": "feat(avm): opcode STATICCALL -  stubbed (#8601)\n\nResolves #8596",
          "timestamp": "2024-09-19T09:47:34Z",
          "tree_id": "706f72ef5966ac5386329fccfc208b9c32064959",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/facff7fd0b6ea57e91f7d3e3863435655d8b48ea"
        },
        "date": 1726740171385,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 34330.384928,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 31818.694439 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5090.04088799999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4700.081128000001 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 99879.39688400002,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 99879397000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14557.925952000001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14557925000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 8656759414,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8656759414 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 161280643,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 161280643 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 7097940829,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 7097940829 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 129534753,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 129534753 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "132435771+jeanmon@users.noreply.github.com",
            "name": "Jean M",
            "username": "jeanmon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "14ff3cfb4291c288113695a3f2245340587fc8e9",
          "message": "chore: Fixing MacOS build - static_cast from field issue (#8642)\n\nhttps://github.com/AztecProtocol/aztec-packages/actions/runs/10938557062",
          "timestamp": "2024-09-19T13:36:53+02:00",
          "tree_id": "9e9008fbdfcfc87e87cfd65a84a1d6bcdf2a19d2",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/14ff3cfb4291c288113695a3f2245340587fc8e9"
        },
        "date": 1726746806592,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 34821.605266000006,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 32005.028302999996 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5163.83900000001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4722.572210999999 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 100072.42975799998,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 100072430000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14625.934406999999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14625933000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 8579756843,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8579756843 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 157701469,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 157701469 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 7023038812,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 7023038812 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 127818469,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 127818469 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98505400+ledwards2225@users.noreply.github.com",
            "name": "ledwards2225",
            "username": "ledwards2225"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09e2f447b003ed4c77b12069893785851a2c6258",
          "message": "feat: constant sized PG proofs and const sized PG rec verifier (#8605)\n\nConstant sized PG proofs and const sized PG rec verifier (similar to\r\nprevious work for Honk using `CONST_PROOF_SIZE_LOG_N = 28`). This is to\r\nfacilitate consistent/precomputable VKs for kernel circuits which\r\ncontain PG recursive verifiers. I'm using `CONST_PG_LOG_N == 20` since\r\nwe don't currently fold anything larger than that but this can easily be\r\ntweaked if necessary.\r\n\r\nCloses https://github.com/AztecProtocol/barretenberg/issues/1087 (we now\r\nsend the perturbator on the first round even though it is all zeros)",
          "timestamp": "2024-09-19T06:51:12-07:00",
          "tree_id": "465f3d4a3c9ff93f5fa97d8856540cb6f2c9b554",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/09e2f447b003ed4c77b12069893785851a2c6258"
        },
        "date": 1726754944824,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 35750.01290999998,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 33297.544386 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5106.889340999985,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4744.051185000001 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 99792.55326300002,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 99792554000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14615.851922,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14615852000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 8537604370,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8537604370 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 151228627,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 151228627 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 6937659259,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6937659259 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 126277511,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 126277511 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lucasxia01@gmail.com",
            "name": "Lucas Xia",
            "username": "lucasxia01"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "581801863529cd2b437cb51b041ada17a96949e0",
          "message": "fix: new commit_sparse bug and new tests (#8649)\n\nThis bug in commit_sparse was due to an assumption that the size of the\r\npolynomial was a power of 2. The structured polynomials work recently\r\nmade this assumption incorrect as we can set start and end indices for a\r\npolynomial. One note is that the bug only happens if the size is large\r\nenough (bigger than the number of cpus from `get_num_cpus_pow2()`)\r\nbecause we otherwise would use 1 thread (which divides any number).\r\n\r\nThe 3 new tests test commit_sparse on a polynomial that has a size !=\r\nvirtual_size, a start_idx != 0, and a larger test case where both are\r\ntrue. This larger test case fails without the fix.",
          "timestamp": "2024-09-19T16:34:31Z",
          "tree_id": "270c43f72abe1960a8a5aff7dc9b6e90fad9496c",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/581801863529cd2b437cb51b041ada17a96949e0"
        },
        "date": 1726764561470,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 35655.197654999996,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 32488.129645999998 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5088.553306999998,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4698.823001000001 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 100479.304955,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 100479305000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14616.722498999998,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14616723000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 8526541678,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8526541678 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 157193732,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 157193732 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 7043269759,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 7043269759 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 127775528,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 127775528 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "fcarreiro@users.noreply.github.com",
            "name": "Facundo",
            "username": "fcarreiro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8bfc769d7cbd6f88bfa7926c051a329ee0fd3468",
          "message": "fix(avm): fix tests under proving (#8640)\n\nThere was a bug in `commit_sparse` which broke one of the tests but\nLucas fixed it.\nSee\nhttps://aztecprotocol.slack.com/archives/C04DL2L1UP2/p1726738000560929?thread_ts=1726728397.210449&cid=C04DL2L1UP2\n\nThis PR also fixes the other tests that were failing, and re-enables the\nbb-prover test.\n\n---------\n\nCo-authored-by: Maddiaa0 <47148561+Maddiaa0@users.noreply.github.com>",
          "timestamp": "2024-09-20T09:22:50+01:00",
          "tree_id": "62032ee772f547afa88cf782cf946f05e8c78ecf",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/8bfc769d7cbd6f88bfa7926c051a329ee0fd3468"
        },
        "date": 1726821511849,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 35557.231949,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 32893.423675 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5093.001473999991,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4674.004397999999 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 100276.62659200002,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 100276627000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14531.35694,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14531357000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 8511005529,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8511005529 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 152320052,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 152320052 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 6976493661,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6976493661 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 128881344,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 128881344 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "fcarreiro@users.noreply.github.com",
            "name": "Facundo",
            "username": "fcarreiro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "241897733fe0a5e2ccdf322449debd367f458086",
          "message": "chore(avm): smaller skippable test (#8664)\n\nThe elements are completely random so a few iterations should be more\nthan enough.",
          "timestamp": "2024-09-20T10:55:54+01:00",
          "tree_id": "e030c9296f0ccaabf789e88e5b081cba48961493",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/241897733fe0a5e2ccdf322449debd367f458086"
        },
        "date": 1726827089495,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 35578.78789300003,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 32572.589048000005 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5094.099117999988,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4613.215919999999 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 100027.067257,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 100027067000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14486.760496000003,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14486760000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 8572286641,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8572286641 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 154320999,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 154320999 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 6972285332,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6972285332 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 127364027,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 127364027 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98505400+ledwards2225@users.noreply.github.com",
            "name": "ledwards2225",
            "username": "ledwards2225"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "020d4fd0cf4137e21f55b1c41e9e381a27191d84",
          "message": "feat: more robust recursion input generator (#8634)\n\nIntroduces the method `write_recursion_inputs_honk` in main.cpp that,\r\ngiven a program, produces the inputs (in the form of a Prover.toml) to a\r\nsecond noir program that recursively verifies a proof of the first. This\r\nis used to update/simplify the logic in\r\n`regenerate_verify_honk_proof_inputs.sh` as a proof of concept. (Also\r\nreplaces `update_verify_honk_proof_inputs.py` with similar logic in\r\n`ProofSurgeon` that deals more dynamically with the public inputs).\r\n\r\nThe reason for doing this is that similar logic will be needed to create\r\ntests for `noir::verify_proof()` for Oink/PG which will have slightly\r\ndifferent forms. A flow of this kind will also be used to generate\r\ninputs from typescript in the integration and e2e tests.",
          "timestamp": "2024-09-20T14:41:28-07:00",
          "tree_id": "f2d27495b19e3c37cbb1503e7e3610461143674f",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/020d4fd0cf4137e21f55b1c41e9e381a27191d84"
        },
        "date": 1726869479251,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 35518.534988999985,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 32979.06877299999 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5071.168607999994,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4669.531049 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 100133.509825,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 100133511000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14599.951304999997,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14599953000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 8485322032,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8485322032 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 154908756,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 154908756 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 6910694843,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6910694843 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 126681476,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 126681476 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lucasxia01@gmail.com",
            "name": "Lucas Xia",
            "username": "lucasxia01"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7247ddba274e691a7c5220848caf1fa9d6aa911e",
          "message": "feat: reduce max memory in translator by freeing accumulator and eccvm (#8253)\n\nWe free the accumulator as soon as the decider_prover is done, the\r\neccvm_builder as soon as the eccvm_prover is constructed, the\r\ntranslator_builder as soon as the translator_prover is constructed, and\r\nthe eccvm_prover, as soon as we pass all the necessary information to\r\nthe translator_builder. The peak memory drops by 18MB, but what's\r\nsignificant is that the translator is no longer the bottleneck of the\r\nbenchmark, mostly due to freeing the accumulator.\r\n\r\nThe peak memory during the eccvm/translator drops from 666MiB to 328MiB,\r\na drop of 338MiB, which is approximately the size of one instance and\r\nthe commitment key, which is as expected.\r\nBefore:\r\n<img width=\"1180\" alt=\"Screenshot 2024-09-20 at 1 55 13 PM\"\r\nsrc=\"https://github.com/user-attachments/assets/469fe1e0-01ac-4e4e-a794-0266d15b4a5f\">\r\n\r\nAfter:\r\n<img width=\"1193\" alt=\"Screenshot 2024-09-19 at 6 28 39 PM\"\r\nsrc=\"https://github.com/user-attachments/assets/2f5c8873-5aa4-4631-a6f1-9a01aeef633c\">",
          "timestamp": "2024-09-20T23:59:32Z",
          "tree_id": "df47871825ea1b7f0403881d1e32c4f9bd913aa5",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/7247ddba274e691a7c5220848caf1fa9d6aa911e"
        },
        "date": 1726878103331,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 35508.039739,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 33102.333335 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5065.420864000003,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4657.826131999999 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 99999.80876700001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 99999809000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14631.000183999997,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14631000000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 8463736260,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8463736260 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 152397387,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 152397387 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 6882939781,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6882939781 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 126519853,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 126519853 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilyas@aztecprotocol.com",
            "name": "Ilyas Ridhuan",
            "username": "IlyasRidhuan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aee4c2dde7576fad1c47e407ee0dca43dac2b1b4",
          "message": "fix: unencryptedlogs witgen (#8669)\n\nPlease read [contributing guidelines](CONTRIBUTING.md) and remove this\r\nline.",
          "timestamp": "2024-09-23T13:21:13+01:00",
          "tree_id": "ab4c8de6d51eace13988021ed356790caa3fd1d6",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/aee4c2dde7576fad1c47e407ee0dca43dac2b1b4"
        },
        "date": 1727095026987,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 35519.744156,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 33173.925431 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5094.787852999985,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4680.429264 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 100156.09508300001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 100156095000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14689.026764000002,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14689028000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 8529613306,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8529613306 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 151630054,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 151630054 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 6955644574,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6955644574 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 126376435,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 126376435 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "132435771+jeanmon@users.noreply.github.com",
            "name": "Jean M",
            "username": "jeanmon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aa85f2a781223f067291b5702f2e47baced865fd",
          "message": "feat(avm): bounded mle implementation (#8668)\n\nResolves #8651",
          "timestamp": "2024-09-23T15:24:26+02:00",
          "tree_id": "6dab82790f8968bb575fb8ad25eafc34b46e7084",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/aa85f2a781223f067291b5702f2e47baced865fd"
        },
        "date": 1727098979816,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 35427.54291899999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 32831.98329900001 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5072.556243000008,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4702.8317179999995 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 99988.542449,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 99988542000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14649.418003,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14649419000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 8470892311,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8470892311 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 150899513,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 150899513 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 6890351996,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6890351996 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 125758766,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 125758766 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "47281315+guipublic@users.noreply.github.com",
            "name": "guipublic",
            "username": "guipublic"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4b4a0bf17050893f913b3db10bc70a584b7aaa5e",
          "message": "feat!: remove sha256 opcode (#4571)\n\nThis PR resolves Noir issue 4330:\r\nhttps://github.com/noir-lang/noir/issues/4330\r\nby removing the sha256 opcode and replacing the sha256 function in the\r\nstdlib by the implementation using the sha256 compression opcode (also\r\nin the stdlib).\r\n\r\n---------\r\n\r\nCo-authored-by: kevaundray <kevtheappdev@gmail.com>\r\nCo-authored-by: Tom French <tom@tomfren.ch>\r\nCo-authored-by: Tom French <15848336+TomAFrench@users.noreply.github.com>\r\nCo-authored-by: dbanks12 <david@aztecprotocol.com>\r\nCo-authored-by: David Banks <47112877+dbanks12@users.noreply.github.com>\r\nCo-authored-by: fcarreiro <facundo@aztecprotocol.com>",
          "timestamp": "2024-09-23T16:34:57+01:00",
          "tree_id": "7e8b87db215b10d93002cba041a92dea672ea161",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/4b4a0bf17050893f913b3db10bc70a584b7aaa5e"
        },
        "date": 1727106686409,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 35711.99144300001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 32845.22258399999 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 5108.522912999987,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4669.1272420000005 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 100183.011734,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 100183012000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 14633.030694000001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 14633030000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 8700329535,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8700329535 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 155191763,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 155191763 ns\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 7015644480,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 7015644480 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 128100084,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 128100084 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}