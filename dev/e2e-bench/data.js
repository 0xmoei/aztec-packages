window.BENCHMARK_DATA = {
  "lastUpdate": 1743196714750,
  "repoUrl": "https://github.com/AztecProtocol/aztec-packages",
  "entries": {
    "End-to-end Benchmark": [
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
          "id": "34ec9e8300116d27c1903a1daae775672186c945",
          "message": "feat(avm): merkle db hints (part 1) (#12922)\n\nThis PR adds AVM hints for the following merkle operations\n* getPreviousValueIndex to get the low leaf index\n* getLeafPreimage to get the low leaf preimage\n* getSiblingPath to get the low leaf sibling path\n\nOn the C++ side, the operations are called slightly differently. I'm using the C++ world state db names.\n\nThis PR also separates the C++ DB interfaces into low level (basically the equivalent of the TS merkleops) and high level (equivalent of the public trees db/journal). This needed to be done because loose low level operations cannot necessarily be constrained. We usually need more context, and a coarser granularity. Therefore the idea is that low level ops are hinted (and unconstrained), and high level ops are constrained.\n\nHinting is currently tested via the deserialization tests, and it should be used by the bulk test, but we never get there (beyond bytecode processing). So some things might still be wrong.\n\nI'm trying to get this out as quick as possible to unblock others.\n\n```\nInitializing HintedRawContractDB with...\n * contractInstances: 6\n * contractClasses: 3\n * bytecodeCommitments: 3\nInitializing HintedRawMerkleDB with...\n * get_sibling_path hints: 3\n * get_previous_value_index hints: 27\n * get_leaf_preimage hints_public_data_tree: 3\n```\n\nPS: there's probably a lot of duplication happening now in the hints. We'll have to eventually deduplicate.",
          "timestamp": "2025-03-26T12:08:05Z",
          "tree_id": "9d34bec4915bbd9a3cac20240f72ce7da1cdb1ab",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/34ec9e8300116d27c1903a1daae775672186c945"
        },
        "date": 1742993507138,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 9692,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.2464752195046686,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 147837,
            "unit": "us"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "16536249+LHerskind@users.noreply.github.com",
            "name": "Lasse Herskind",
            "username": "LHerskind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d768d2661462f93d798a3f535d9a7b33fc619276",
          "message": "chore: fix governance util issue (#13043)\n\nUpdates the governance util such that it uses the correct asset",
          "timestamp": "2025-03-26T14:13:46Z",
          "tree_id": "3fc85ef5b7fbc02975c1cbffd116bf84fba9a9ea",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/d768d2661462f93d798a3f535d9a7b33fc619276"
        },
        "date": 1742999646688,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 9371,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.23832897072152429,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 137681,
            "unit": "us"
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
          "id": "fefffa7a6376066792874da4c5da41126603841d",
          "message": "chore: towards no more mock op_queues (#12984)\n\nRemove occurences of mock ecc ops additions in scenarios where the merge\nprotocol operates properly without adding this merge operations but we\nare also not required to make some actual changes to the protocol\nitself.",
          "timestamp": "2025-03-26T14:24:00Z",
          "tree_id": "5b9e2ccabd7ddb216d8259b5131a737d7e6a7ed1",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/fefffa7a6376066792874da4c5da41126603841d"
        },
        "date": 1743000887473,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 9385,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.23866604772604957,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 132083,
            "unit": "us"
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
          "id": "1ebd04424dca674b35c4fc3d32e240046f9b27fa",
          "message": "chore(bb): minor acir buf C++ improvements (#13042)\n\nPlease read [contributing guidelines](CONTRIBUTING.md) and remove this\nline.",
          "timestamp": "2025-03-26T14:38:21Z",
          "tree_id": "74dd59a306f9a0cbd7c2f957d2bafac019b7e930",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/1ebd04424dca674b35c4fc3d32e240046f9b27fa"
        },
        "date": 1743002546895,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 9322,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.23706676345312397,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 138484,
            "unit": "us"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "152162806+sklppy88@users.noreply.github.com",
            "name": "esau",
            "username": "sklppy88"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8a47d8ba6618fa5299923d8b70bb3cfe88e48115",
          "message": "fix: bootstrap network and sponsored fpc devnet (#13044)\n\nEnables sponsoredFPC and fixes bootstrap network\n\nCo-authored-by: sklppy88 <esau@aztecprotocol.com>",
          "timestamp": "2025-03-26T16:29:48+01:00",
          "tree_id": "b61dd476682adffe52546b9638354d5d9af2dcc6",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/8a47d8ba6618fa5299923d8b70bb3cfe88e48115"
        },
        "date": 1743004831305,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 9278,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.23594477004822711,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 131658,
            "unit": "us"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "68168980+just-mitch@users.noreply.github.com",
            "name": "just-mitch",
            "username": "just-mitch"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "af48184f5786e21b7e2e7aa980487b04495a2559",
          "message": "feat: staking asset handler (#12968)\n\nFix #12932",
          "timestamp": "2025-03-26T11:38:38-04:00",
          "tree_id": "bd02b0f6ee462d1ce944711ee6f5d9d959089048",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/af48184f5786e21b7e2e7aa980487b04495a2559"
        },
        "date": 1743006051681,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 9479,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.24105754839170018,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 146772,
            "unit": "us"
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
          "id": "3a7ba2d12da63833ef233b290d51428594f21c13",
          "message": "chore: redundant if in affine from projective constructor (#13045)\n\nThe if-statement at the end of the projective to affine constructor is\nredundant, we check that the projective point is infinity at the\nbeginning of the function and the operations we perform afterwards do\nnot affect it in a way that would make it become infinity.",
          "timestamp": "2025-03-26T15:36:35Z",
          "tree_id": "755181a5808e6ba644ec16f1406c5572090ed559",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/3a7ba2d12da63833ef233b290d51428594f21c13"
        },
        "date": 1743006052968,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 9438,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.2400282657285722,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 131302,
            "unit": "us"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "santiago@aztecprotocol.com",
            "name": "Santiago Palladino",
            "username": "spalladino"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f972db97dcd643bf5a86fd7ff7439303135fefac",
          "message": "fix: Syntax error when running tests via jest after tsc build (#13051)\n\nRunning e2e tests in jest after building using `tsc -b` would result in\nan error `SyntaxError: 'super' keyword unexpected here`.\n\n```\n FAIL  src/e2e_block_building.test.ts\n  ● Test suite failed to run\n\n    SyntaxError: 'super' keyword unexpected here\n\n      at Runtime.loadEsmModule (../../node_modules/jest-runtime/build/index.js:517:20)\n```\n\nAfter patching jest to report where the issue was coming up, it turned\nout it was caused by the usage of `super` in a js private method. For\nsome reason tsc was emitting the following:\n\n```ts\n  async #getHintKey(treeId: MerkleTreeId): Promise<AppendOnlyTreeSnapshot> {\n    const treeInfo = await super.getTreeInfo(treeId);\n    return new AppendOnlyTreeSnapshot(Fr.fromBuffer(treeInfo.root), Number(treeInfo.size));\n  }\n```\n\n```js\n_HintingPublicTreesDB_instances = new WeakSet(), _HintingPublicTreesDB_getHintKey =\n// Private methods.\nasync function _HintingPublicTreesDB_getHintKey(treeId) {\n    const treeInfo = await super.getTreeInfo(treeId);\n    return new AppendOnlyTreeSnapshot(Fr.fromBuffer(treeInfo.root), Number(treeInfo.size));\n};\n```\n\nSince the private method was moved outside the class as part of code\ngeneration, node threw a syntax error since `super` can only be used in\nthe context of a class.\n\nThis patches the issue by using regular ts private methods, but we still\nneed to figure out why ts is emitting invalid js code.",
          "timestamp": "2025-03-26T16:20:25Z",
          "tree_id": "bb33ad02e393bcccb63af19dc736cd97506a5299",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/f972db97dcd643bf5a86fd7ff7439303135fefac"
        },
        "date": 1743007907863,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 9509,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.24182375739466822,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 134111,
            "unit": "us"
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
          "id": "dc5f78f7f0e6a1a20c3e0a280abca7e7edbf69d0",
          "message": "chore: comprehensive cleanup of translator flavor and use inheritance properly in flavors (#13041)\n\nCloses https://github.com/AztecProtocol/barretenberg/issues/810.\n\nClarify getters in the `TranslatorFlavor` and ensure all the existing\ngetters are actually needed. We also were (and I think still are in\nECCVM) using inheritance weirdly between entities so cleaned that up as\nwell. There is still work to be done in ECCVM (added to\n[this](https://github.com/AztecProtocol/barretenberg/issues/939) issue).",
          "timestamp": "2025-03-26T16:36:06Z",
          "tree_id": "8c89cfc04c3d7ce5f0ba235b86cb71271dd67404",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/dc5f78f7f0e6a1a20c3e0a280abca7e7edbf69d0"
        },
        "date": 1743009540263,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 9218,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.23443729072076103,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 133965,
            "unit": "us"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "152162806+sklppy88@users.noreply.github.com",
            "name": "esau",
            "username": "sklppy88"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d92d8955753b0079ca884767fe26968dea9fc377",
          "message": "fix: starting the sandbox with no pxe should still deploy initial test accounts (#13047)\n\nResolves #12950 without adding cheatcodes to advance a block.\n\nCo-authored-by: sklppy88 <esau@aztecprotocol.com>",
          "timestamp": "2025-03-26T18:17:33+01:00",
          "tree_id": "419974572e2be8f0daf3196155851a1415ca0911",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/d92d8955753b0079ca884767fe26968dea9fc377"
        },
        "date": 1743011424176,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 9228,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.2346891717936472,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 142659,
            "unit": "us"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "santiago@aztecprotocol.com",
            "name": "Santiago Palladino",
            "username": "spalladino"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "985e83bec2b4da9791f47768953cba3d9af57f66",
          "message": "fix: Bump tsc target (#13052)\n\nWe were using different targets for tsc and swc (es2020 vs es2022). This\nPR updates tsc target so it matches the swc one, to minimize\nincompatibilities between code built with either tool.",
          "timestamp": "2025-03-26T17:12:53Z",
          "tree_id": "84d80ddbc27939afcb9d1d859f9465b5791deef0",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/985e83bec2b4da9791f47768953cba3d9af57f66"
        },
        "date": 1743011487499,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 9710,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.24693156662028468,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 162528,
            "unit": "us"
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
          "id": "da6d02178f2cb61e56e8f9e702aba574f8b03cee",
          "message": "chore: remove dummy ops in decider pk (#13049)\n\nWe used to not serialise and deserialise infinity points in the\ntranscript properly until\n[this](https://github.com/AztecProtocol/aztec-packages/pull/7709). More\nprecisely, it was possible to get to\n[this](https://github.com/AztecProtocol/aztec-packages/blob/mm/handle-merge/barretenberg/cpp/src/barretenberg/ecc/groups/element_impl.hpp#L68)\npoint in the projective to affine constructor (used when operating with\nzero commitments) because the transcript was not setting the infinity\nflag in situations when `z=0`. This was leading to intermmitent issues\nthat resulted in us adding dummy ecc ops [this\nPR](https://github.com/AztecProtocol/aztec-packages/pull/5174/files). We\nshould now be able to remove these dummy ops.",
          "timestamp": "2025-03-26T21:34:50Z",
          "tree_id": "6186a6d282b6d2750c826f05901df49f79f70c81",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/da6d02178f2cb61e56e8f9e702aba574f8b03cee"
        },
        "date": 1743027418081,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 9646,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.2453188863405708,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 135721,
            "unit": "us"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "janbenes1234@gmail.com",
            "name": "Jan Beneš",
            "username": "benesjan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b7e5649237a66247b26bda6330fdd87cb002059",
          "message": "feat: LogEncryption trait (#12942)",
          "timestamp": "2025-03-27T02:00:24Z",
          "tree_id": "f2de830552fe9addf844138ba0b4fc29701d9f3f",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/0b7e5649237a66247b26bda6330fdd87cb002059"
        },
        "date": 1743041527145,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 9342,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.23758505247897432,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 135687,
            "unit": "us"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "janbenes1234@gmail.com",
            "name": "Jan Beneš",
            "username": "benesjan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "20d734a11549d7a100d8f7e0ec64ca86d4cb73f8",
          "message": "feat: 64 bit log type id, 64 bit log metadata (#12956)",
          "timestamp": "2025-03-26T20:32:24-06:00",
          "tree_id": "92987217b6b580a9f6bcd2098d3abb548eeec484",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/20d734a11549d7a100d8f7e0ec64ca86d4cb73f8"
        },
        "date": 1743044391481,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 8468,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.21534677398688495,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 104616,
            "unit": "us"
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
          "id": "f03b2e5b541757e1dcb7daf821977f43758be70c",
          "message": "feat(avm): add calldata & returndata to context (#13008)\n\n- Reading calldata and (almost) writing returndata to the vm2 contexts. \n- Splits context interfaces into Enqueued and Nested\n- Adds parent contexts (to nested contexts) and child contexts (in both)\nto the `context` class\n\nNothing much flexs these for now - we will need to start doing the\nXDATA_COPY opcodes soon.",
          "timestamp": "2025-03-27T13:03:16+08:00",
          "tree_id": "336f04ead2b9cf3e2cf99a1c1027b497c15f256e",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/f03b2e5b541757e1dcb7daf821977f43758be70c"
        },
        "date": 1743054345575,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 9433,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.23989559743599587,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 142423,
            "unit": "us"
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
          "id": "9612a4e25b825f4ef6080c165f070cc7b36bab49",
          "message": "feat: track total tx fee (#12601)",
          "timestamp": "2025-03-27T11:02:47Z",
          "tree_id": "748c44c244f57934a772372cfa66e04f85c9e36c",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/9612a4e25b825f4ef6080c165f070cc7b36bab49"
        },
        "date": 1743075067466,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 9298,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.23645771213921873,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 128770,
            "unit": "us"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "16536249+LHerskind@users.noreply.github.com",
            "name": "Lasse Herskind",
            "username": "LHerskind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "327341fb11f99fec6219164cdc2c12f996b77182",
          "message": "fix: invalid getCommittee function (#13072)",
          "timestamp": "2025-03-27T11:55:06Z",
          "tree_id": "e87b18b7fd0019f74c35fc78634a2ce5258f67ea",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/327341fb11f99fec6219164cdc2c12f996b77182"
        },
        "date": 1743076929597,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 9448,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.24026812000047093,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 145949,
            "unit": "us"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "16536249+LHerskind@users.noreply.github.com",
            "name": "Lasse Herskind",
            "username": "LHerskind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4eb1156250d2221e028c340e7d93dcdc39803cbe",
          "message": "feat: gas benchmark for \"normal usage\" (#13073)\n\nFixed #13075\n\nCreating explicit benchmarking test for gas such that there is something\nthat is:\n1) convenient to check against for optimisations\n2) gives a somewhat correct view instead of having all the failure cases\nin the mix\n\nThe test runs with a validator set of 100 entities, that each have a\nforwarder contract. We then ram through time and submit and fake proof\n100 blocks to collect data.\n\nNotice, that if you bump up the numbers of entities or blocks foundry is\nprobably going to explode if you don't also change the gas limits\nbecause that is a lot of things being loaded in 🤷\n\nTodo: Talk to @Maddiaa0 @just-mitch and @aminsammara on which numbers\nare missing and what should make its way into the fancy benchmark graphs\nthat charlie setup. Most should be in #12615",
          "timestamp": "2025-03-27T12:25:04Z",
          "tree_id": "cfad1b61ac0b5244adf8725ad91e94149da1ddca",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/4eb1156250d2221e028c340e7d93dcdc39803cbe"
        },
        "date": 1743078724920,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 9385,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.23866450977593698,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 131654,
            "unit": "us"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "santiago@aztecprotocol.com",
            "name": "Santiago Palladino",
            "username": "spalladino"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "27f1eca25c4c5849d32541b5ad1d3068d5d1911a",
          "message": "chore: Speed up and deflake sentinel test (#13078)\n\nThe sentinel e2e test was [sometimes\nfailing](http://ci.aztec-labs.com/0534e1b01190d6fd) since not enough\nblocks were mined in time. We believe this was because the offline\nvalidator was being picked up as proposer, so multiple slots end up\nbeing missed.\n\nThis PR fixes it by bumping timeout and reducing the number of blocks we\nmine. We used to mine so many to make sure that each validator was\npicked at least one as proposer, so no matter which one we inspected, we\ncould assert there was at least one block proposed in its stats. We now\njust look for one with proposals and assert on it.",
          "timestamp": "2025-03-27T13:16:06Z",
          "tree_id": "7ca9c4170f282f039dcdd51e437430b16cc181f3",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/27f1eca25c4c5849d32541b5ad1d3068d5d1911a"
        },
        "date": 1743083076199,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 9386,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.23870022951027067,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 135342,
            "unit": "us"
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
          "id": "fbbc6c701efa4f3cc7317e437a103f9a1b51895d",
          "message": "feat(avm): merkle hints (part 2) (#13077)\n\nGetLeafPreimage complete for public data and nullifiers.\nGetLeafValue complete for note hashes and l1 to l2.\n\nChanged getNullifierIndex to use other methods (the hinted ones). Please check that.",
          "timestamp": "2025-03-27T13:25:31Z",
          "tree_id": "d03a9b5933099c56b2653cb27aa424a96800e1a5",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/fbbc6c701efa4f3cc7317e437a103f9a1b51895d"
        },
        "date": 1743084497298,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 9243,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.23505447269877558,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 134776,
            "unit": "us"
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
          "id": "a64d1dc9d7b0071f4cde2a4213f76c881a6fbe3f",
          "message": "chore: remove addition of dummy ops in mock circuit producer (#13003)\n\nEvery call to `prove_merge` checks whether the ecc_op block is empty and\nadds dummy ops if required to avoid issues. Therefore, there is no need\nto add dummy ops when creating mock circuits. This isolates the addition\nof dummy gates to two places: at builder finalisation and when necessary\nin `prove_merge`.",
          "timestamp": "2025-03-27T13:47:32Z",
          "tree_id": "48ea72add036f1a865bdbb9a7f7dae47063ac281",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/a64d1dc9d7b0071f4cde2a4213f76c881a6fbe3f"
        },
        "date": 1743085374200,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 8581,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.21823740126394373,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 105872,
            "unit": "us"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "5764343+charlielye@users.noreply.github.com",
            "name": "Charlie Lye",
            "username": "charlielye"
          },
          "committer": {
            "email": "5764343+charlielye@users.noreply.github.com",
            "name": "Charlie Lye",
            "username": "charlielye"
          },
          "distinct": true,
          "id": "531b321fe2038f44e0bd9829344d657aa52eaaea",
          "message": "Merge branch 'master' of github.com:aztecprotocol/aztec-packages",
          "timestamp": "2025-03-27T14:28:08Z",
          "tree_id": "fbd54ce970374fff13a20688f3c1aab6a6abdab1",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/531b321fe2038f44e0bd9829344d657aa52eaaea"
        },
        "date": 1743086124362,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 8581,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.21823740126394373,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 105872,
            "unit": "us"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "5764343+charlielye@users.noreply.github.com",
            "name": "Charlie Lye",
            "username": "charlielye"
          },
          "committer": {
            "email": "5764343+charlielye@users.noreply.github.com",
            "name": "Charlie Lye",
            "username": "charlielye"
          },
          "distinct": true,
          "id": "8fc3c158ee8fac2386c656e7a7589527a06bd704",
          "message": "Revert \"chore: add default native proving for cli wallet retry (#13028)\"\n\nThis reverts commit b2f47855fa1877dc488ee4753037e5e057f5179d.",
          "timestamp": "2025-03-27T15:15:48Z",
          "tree_id": "a3967607117ca7a1d3240d5a90a970ea6ec92319",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/8fc3c158ee8fac2386c656e7a7589527a06bd704"
        },
        "date": 1743090254598,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 9406,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.23920389117753857,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 139955,
            "unit": "us"
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
          "id": "e1f2bddb4c1a21aeb1c058da2c8002863cff3e24",
          "message": "chore(avm): remove codegen (all but flavor) (#13079)\n\nPlease read [contributing guidelines](CONTRIBUTING.md) and remove this\nline.",
          "timestamp": "2025-03-27T15:33:20Z",
          "tree_id": "aa7358f1bbfa4a37559270678d8d1ce70ea22587",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/e1f2bddb4c1a21aeb1c058da2c8002863cff3e24"
        },
        "date": 1743091295198,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 9265,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.23563037605429865,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 143863,
            "unit": "us"
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
          "id": "9c82f3f053e01cee5359f8b1625ecd27c4978bd2",
          "message": "chore(avm): final codegen nuking (#13089)\n\nMoves the only variable part of the flavor into a new file `flavor_variables.hpp`. Nukes the rest.",
          "timestamp": "2025-03-27T16:48:44Z",
          "tree_id": "6a91392f38901e6d52b5c3d60464129c53cd0385",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/9c82f3f053e01cee5359f8b1625ecd27c4978bd2"
        },
        "date": 1743094814932,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 9484,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.2411809764163594,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 148894,
            "unit": "us"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "janbenes1234@gmail.com",
            "name": "Jan Beneš",
            "username": "benesjan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8e71e55911f928aaccaa07637631171c18584390",
          "message": "refactor: `getIndexedTaggingSecretAsSender` oracle cleanup (#13015)",
          "timestamp": "2025-03-27T17:23:37Z",
          "tree_id": "adf5bfad6c53901f64389a3840c536d03393fb2f",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/8e71e55911f928aaccaa07637631171c18584390"
        },
        "date": 1743096655468,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 8486,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.2158067666211674,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 110814,
            "unit": "us"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "68168980+just-mitch@users.noreply.github.com",
            "name": "just-mitch",
            "username": "just-mitch"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d936285f306eb79c268bfb02e365ef6462f9a0d0",
          "message": "fix: fuzzer on staking asset handler constructor test (#13101)\n\nPlease read [contributing guidelines](CONTRIBUTING.md) and remove this\nline.",
          "timestamp": "2025-03-27T18:59:20Z",
          "tree_id": "d541c9de77201597a37158dd9ba03b420a54d154",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/d936285f306eb79c268bfb02e365ef6462f9a0d0"
        },
        "date": 1743102385660,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 9529,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.2423268417203461,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 136884,
            "unit": "us"
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
          "id": "7bb43a9978d521d3b54284c16f0f4dcfebc46f0b",
          "message": "chore: Add a script to generate cpp files for AVM2 (#13091)",
          "timestamp": "2025-03-27T19:09:35Z",
          "tree_id": "18569f600fb4e4c3f5870f30547881529ff5e078",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/7bb43a9978d521d3b54284c16f0f4dcfebc46f0b"
        },
        "date": 1743104340865,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 9111,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.23169612219468128,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 139274,
            "unit": "us"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "santiago@aztecprotocol.com",
            "name": "Santiago Palladino",
            "username": "spalladino"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1e77efb31fd8f22496eebb7b575952b9ebc14b27",
          "message": "feat: Prover node snapshot sync (#13097)\n\nBuilds on #12927",
          "timestamp": "2025-03-27T19:50:54Z",
          "tree_id": "b97552f7fe638a264b37b82a55eff7e925a1ab0b",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/1e77efb31fd8f22496eebb7b575952b9ebc14b27"
        },
        "date": 1743105462796,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 8509,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.21639761590418605,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 105642,
            "unit": "us"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aakoshh@gmail.com",
            "name": "Akosh Farkash",
            "username": "aakoshh"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1e58eb1511e01463ba8f7052839b1f0d85e6f2ef",
          "message": "feat: `msgpack` encoding for `Program` and `WitnessStack` (#12841)\n\nAdds `msgpack` serialisation to the generated Acir and Witness C++ code.\n\nI moved the alterations described in `dsl/README.md` into the code\ngeneration itself, so no manual work is required. The PR is running\nagainst a feature branch with the same name in Noir, here's the upstream\nPR: https://github.com/noir-lang/noir/pull/7716\n\nWith this PR is merged, `bb` should be able to handle `msgpack` or\n`bincode`. Once that's released we can switch to using `msgpack` in Noir\nin both native and wasm by merging\nhttps://github.com/noir-lang/noir/pull/7810. And then we can remove the\n`msgpack` format detection and the fallback to `bincode`.\n\n**TODO**:\n- [x] Get it to compile \n- [x] Change `nargo` to allow compiling contracts with `msgpack` format:\nadded `NOIR_SERIALIZATION_FORMAT` env var\n- [x] Add a first byte to the data to say which serialization format it\nis. There is a chance that it would clash with existing bincode data\nthough, so a fallback would anyway be necessary. (Or we should ascertain\nthat bincode never starts with some specific bit sequence).\n- [x] ~Change the `bb` code so it tries `bincode`, then falls back to\n`msgpack` - this way the currently used format stays fast, but we can\nfeed it new data.~ _This looks problematic, as exceptions in the wasm\nbuild is disabled in `arch.cmake` and `throw_or_abort` aborts in wasm.\nInstead we run\n[msgpack::parse](https://c.msgpack.org/cpp/namespacemsgpack.html#ad844d148ad1ff6c9193b02529fe32968)\nfirst to check if the data looks like msgpack; if not, we use bincode._\n- [x] Run integration tests with `msgpack` on both sides in\nhttps://github.com/AztecProtocol/aztec-packages/pull/13021\n- [x] Ignore the Brillig opcodes in Barretenberg\n- [x] Change the serialization of `WitnessStack` and `WitnessMap` to use\nthe env var, add fallbacks in `bb` for them\n- [x] Revert the change to `noir-repo-ref` before merging\n\n\n### Use of `MSGPACK_FIELDS`\n\nThe generated code is using `MSGPACK_FIELDS` for structs, to keep it\nmore terse.\n\nAt some point during debugging the memory issue below I changed it so\nthat I can have more direct control by generating code for individual\nfields. That needed some helper functions which I looted from the\n`msgpack-c` library and injected into the namespaces as a `Helpers`\nstruct. This approach might be useful if we wanted to have extra checks,\nfor example rejecting the data if there are extra fields, indicating a\ntype has been extended with things we don't recognise, or if we wanted\nhandle renamed fields. I left it out so there is less code to maintain,\nbut if we need it we can recover it from the [commit\nhistory](https://github.com/noir-lang/noir/pull/7716/commits/b0a612de5f2f27fd8010182704d14dc96ce113cb).\n\n### Compile `nargo` with the `msgpack` feature\n\n```bash\necho af/msgpack-codegen > noir/noir-repo-ref\nnoir/bootstrap.sh\n```\n\n### Generate and compile C++ code\n\n```bash\ncd noir/noir-repo && NOIR_CODEGEN_OVERWRITE=1 cargo test -p acir cpp_codegen && cd -\ncp noir/noir-repo/acvm-repo/acir/codegen/acir.cpp barretenberg/cpp/src/barretenberg/dsl/acir_format/serde/acir.hpp\ncp noir/noir-repo/acvm-repo/acir/codegen/witness.cpp barretenberg/cpp/src/barretenberg/dsl/acir_format/serde/witness_stack.hpp\ncd barretenberg/cpp && ./format.sh changed && cd -\n\nbarretenberg/cpp/bootstrap.sh\n```\n\n### Test `nargo` with `bb`\n\nOne example of an integration test that uses `bb` and noir in the Noir\nrepo is\nhttps://github.com/noir-lang/noir/actions/runs/13631231158/job/38099477964\n\nWe can call it like this:\n\n```bash\ncd noir/noir-repo && cargo install --path tooling/nargo_cli && cd -\n./barretenberg/cpp/bootstrap.sh\nexport BACKEND=$(pwd)/barretenberg/cpp/build/bin/bb\nexport NOIR_SERIALIZATION_FORMAT=msgpack\nnoir/noir-repo/examples/prove_and_verify/test.sh\n```\n\nIf it works, it should print this:\n```console\n% unset NOIR_SERIALIZATION_FORMAT                       \n% noir/noir-repo/examples/prove_and_verify/test.sh      \n[hello_world] Circuit witness successfully solved\n[hello_world] Witness saved to /mnt/user-data/akosh/aztec-packages/noir/noir-repo/examples/prove_and_verify/target/witness.gz\nFinalized circuit size: 18\nProof saved to \"./proofs/proof\"\nFinalized circuit size: 18\nVK saved to \"./target/vk\"\nProof verified successfully\n```\n\nWhereas if it doesn't:\n```console\n% export NOIR_SERIALIZATION_FORMAT=msgpack                                                                                                                                                            \n% noir/noir-repo/examples/prove_and_verify/test.sh             \n[hello_world] Circuit witness successfully solved\n[hello_world] Witness saved to /mnt/user-data/akosh/aztec-packages/noir/noir-repo/examples/prove_and_verify/target/witness.gz\nLength is too large\n```\n\nI attached the final artefacts to the PR so it's easier to test with\njust `bb`.\n\n[hello_world.json](https://github.com/user-attachments/files/19391072/hello_world.json)\n\n[witness.gz](https://github.com/user-attachments/files/19391074/witness.gz)\n\n\n### Further testing\n\nWith the `noir-repo-ref` pointing at the feature `af/msgpack-codegen`\nfeature branch, we can run all the contract compilations and tests with\n`msgpack` as follows:\n\n```shell\nexport NOIR_SERIALIZATION_FORMAT=msgpack       \n./bootstrap.sh ci\n```\n\nThis is tested in\nhttps://github.com/AztecProtocol/aztec-packages/pull/13021\n\n### Peek into artefacts\n\nWe can inspect the file in JSON format using\n[this](https://crates.io/crates/msgpack-cli) msgpack CLI tool.\n\n```shell\njq -r '.bytecode' ./target/program.json | base64 --decode | gunzip | tail -c +2 | mpk --to-json | jq\n```\n\nThanks Tom for the\n[spell](https://github.com/AztecProtocol/msgpack-c/pull/5#issuecomment-2743703506)\n🙏\n\n### False bug\n\nAt some point I thought had to make some fixes in `msgpack-c` itself to\nmake this work: https://github.com/AztecProtocol/msgpack-c/pull/5\nA similar [blocking\nbug](https://github.com/AztecProtocol/aztec-packages/pull/12841#issuecomment-2746520682)\nwas encountered when running the entire `ci` build with msgpack format.\n\nIt turned out it was a [dangling\npointer](https://github.com/msgpack/msgpack-c/issues/695#issuecomment-393035172)\nissue, fixed in\nhttps://github.com/AztecProtocol/aztec-packages/pull/12841/commits/5810e3b5120c09fbe9887461f4b4fa56332c1b7d\n\nMuch of the comments below are related to my struggles that came from\nthis mistake; you can ignore them.",
          "timestamp": "2025-03-27T19:51:22Z",
          "tree_id": "0d1c277fda6b7ced3597555dfb10ebcce7cc9ace",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/1e58eb1511e01463ba8f7052839b1f0d85e6f2ef"
        },
        "date": 1743107887603,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 9402,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.23910866030047828,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 148386,
            "unit": "us"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "75146596+Sarkoxed@users.noreply.github.com",
            "name": "Sarkoxed",
            "username": "Sarkoxed"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69f426e2e2bcef09c6a4f42300e92f4ded24e9f0",
          "message": "fix: cycle_group fuzzer (#12921)\n\nThis pr fixes several issues in `cycle_group`, `cycle_group fuzzer` and\n`field_t`. And prepares the repo for automated fuzzing\n\n## CMake\n\n- Added new definition for `SHOW_INFORMATION` for debugging the fuzzer\noutputs\n- Removed `coverage` options from clang, since it's no longer supported\n\n## Field\n\n- switched a bunch of zeros to ones in `field_t` `const` initializations\nto make the behavior of constants uniform across all the methods\n- `operator-()` and `operator-(other)` no longer change the\nmultiplicative constant of a `const`\n- `operator+(other)` no longer adds the corresponding multiplicative\nconstants of two consts\n- Consequently assert equal now behaves better and creates less gates on\naverage\n\n- added the regression tests on the bug\n\n## Cycle Group\n\nI decided to get rid of `is_standard` parameter in constructors. Now it\nfully depends on the input values.\n\n`set_point_at_infinity` - major changes in this method. Now all the edge\ncases are handled. I hope\nAlso, from now on it's explicitly checked that we don't set the point at\ninfinity to not infinity, since this behavior is undefined.\n\n`operator+`, `operator-`. Got rid of the blank `cycle_group\nresult(ctx)`. It caused too many problems. Now the result is properly\nconstructed from coordinates and `is_infinty`.\n\n\n## Cycle Group Fuzzer\n\n- Got rid of the old `SHOW_INFORMATION` macros to make uniform builds in\nautomated setting\n- changed the `set_inf` method to work under new restrictions\n\n---------\n\nCo-authored-by: Innokentii Sennovskii <isennovskiy@gmail.com>",
          "timestamp": "2025-03-27T23:43:35+03:00",
          "tree_id": "a902eb4965590d832125ce2bd30a6d6963890e61",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/69f426e2e2bcef09c6a4f42300e92f4ded24e9f0"
        },
        "date": 1743108699856,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 8424,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.21423864299529619,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 111649,
            "unit": "us"
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
          "id": "00fae1befe285cca454bdc13f205fa0cbc38174b",
          "message": "feat: benchmark avm simulator (#12985)\n\nThis PR does _not_ integrate benchmarks into CI. It updates the\nsimulator tests to support benchmarking, adds a bench test, and\npretty-prints simulator benchmarks.\n\n## AvmSimulator\n- instrCounter tracked in machine state. When a nested call returns, its\nparent absorbs its instrCounter. This might seem weird, but it's the\nmetric we want. If it feels too wrong, i'm fine having both an\ninstrCounter and a totalInstrCounter. Or we can rename this one\ntotalInstrCounter for clarity.\n\n## PublicTxSimulationTester, SimpleContractDataSource\n- SimpleContractDataSource now tracks contract & function names so that\n`getDebugFunctionName()` works properly in simulator tests\n- Tester only creates a single PublicTxSimulator that is used for all\nsimulations instead of one per simulation\n- Test can create a `TestExecutorMetrics` and pass it into\n`PublicTxSimulationTester` constructor so that many test cases can\naggregate metrics into the same class.\n\n## Metrics / Benchmarking\nI opted _not_ to use the telemetry based benchmarking used by\n`e2e_block_building.test.ts`. Instead, I created a custom\n`TestExecutorMetrics` for benchmarking the simulator in exactly the way\nthat works for us. We can easily add `toGithubActionsBenchmark()`\nadapter function if it is valuable.\n\nRunning the tests with `BENCH_OUTPUT_MD` set will output the results to\nthe specified markdown file. Running them without that env var set will\n`log.info` them.\n\n## New AMM test isolated to public simulation for measurements\nThis is brittle. It gives us measurements, but will break if any changes\nare made to AMM.\n\n![image](https://github.com/user-attachments/assets/abffd658-5b79-430a-9a68-822ba911e997)\n\n![image](https://github.com/user-attachments/assets/78816f68-c470-41d8-991c-731e512cf1a1)\n\n![image](https://github.com/user-attachments/assets/2d8f8782-bb25-4928-b36e-2b584098834d)",
          "timestamp": "2025-03-27T21:53:52Z",
          "tree_id": "0a1be7b5aa44fc1901b8b33dbec6d60211509b32",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/00fae1befe285cca454bdc13f205fa0cbc38174b"
        },
        "date": 1743112864300,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 9365,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.23817497000186252,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 153490,
            "unit": "us"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "152162806+sklppy88@users.noreply.github.com",
            "name": "esau",
            "username": "sklppy88"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7dac390c30b0f857878c28dc109a4851940eba3c",
          "message": "fix: use version from registry for rollup instead of config (#12938)\n\nThis ensures that we use rollup / registry from the version passed in,\nand the version is now optional and not preset to 1. I'm not removing\nany config though to keep this individual change small, as the cleanup\nwill be bigger and may want to be thought out a bit more.\n\nCo-authored-by: sklppy88 <esau@aztecprotocol.com>",
          "timestamp": "2025-03-28T02:35:18+01:00",
          "tree_id": "d276f3b93f21112976754ac37532c8fb2bf9ed59",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/7dac390c30b0f857878c28dc109a4851940eba3c"
        },
        "date": 1743127308315,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 8485,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.21578008384350938,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 111311,
            "unit": "us"
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
          "id": "0e602556e2874309162f66a53d1afaf0d8546c9e",
          "message": "feat: remove unary trick in decomposition and constraints polishing (#13080)\n\nBenchmarks after this PR:\n\n```\n-------------------------------------------------------------------------------\nBenchmark                                     Time             CPU   Iterations\n-------------------------------------------------------------------------------\nbc_decomposition_acc                       7.34 us         7.33 us        96151\nbc_decomposition_interactions_acc         0.704 us        0.704 us       987128\nbc_hashing_acc                            0.905 us        0.905 us       769096\nbc_hashing_interactions_acc                1.39 us         1.39 us       505947\ninstr_fetching_acc                         8.69 us         8.69 us        81451\ninstr_fetching_interactions_acc            5.90 us         5.89 us       119592\n```\nBenchmarks before this PR:\n\n```\nbc_decomposition_acc                       13.3 us         13.3 us        55869\nbc_decomposition_interactions_acc          1.36 us         1.36 us       508241\nbc_hashing_acc                            0.827 us        0.827 us       810309\nbc_hashing_interactions_acc                1.52 us         1.52 us       427220\ninstr_fetching_acc                         8.84 us         8.84 us        81336\ninstr_fetching_interactions_acc            5.84 us         5.83 us       119965\n```",
          "timestamp": "2025-03-28T09:01:18Z",
          "tree_id": "212b5a5a73678c30ee7cac38381978581d27ee20",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/0e602556e2874309162f66a53d1afaf0d8546c9e"
        },
        "date": 1743152928670,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 9334,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.23736680458469236,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 143940,
            "unit": "us"
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
          "id": "2a2904a655092ec67f44af627b7d3d80ece52b51",
          "message": "fix: load two more points (#13119)\n\n@PhilWindle noticed that the prover agents had to download the CRS again\nin order to prove a root rollup. Looking at the files it seems they\nneeded two more points added to the initial preload (this is possible\nnow that the files are streamed, see #12996)",
          "timestamp": "2025-03-28T09:54:04Z",
          "tree_id": "7502b1915d4b99f2f9246a1327a3ab82c97769ba",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/2a2904a655092ec67f44af627b7d3d80ece52b51"
        },
        "date": 1743157334519,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 9335,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.23740258778316786,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 152504,
            "unit": "us"
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
          "id": "f67375deb410e99dd05336e0bc58533127b86b6c",
          "message": "chore: Improve callstacks for public dispatch fns (#13120)\n\nBefore\n\n![image](https://github.com/user-attachments/assets/e08ca917-9420-4094-87ce-d17118af539d)\nAfter\n\n![image](https://github.com/user-attachments/assets/985f5954-38ed-41a6-b817-b1dec9404891)",
          "timestamp": "2025-03-28T12:25:40+01:00",
          "tree_id": "5d5e4f4fa24cb5522a07fae153ed9d5c32d62914",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/f67375deb410e99dd05336e0bc58533127b86b6c"
        },
        "date": 1743161589977,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 8500,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.21617686034239822,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 109733,
            "unit": "us"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "5764343+charlielye@users.noreply.github.com",
            "name": "Charlie Lye",
            "username": "charlielye"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "970dae5b7745165c81b93a0b7240b428cf94e782",
          "message": "fix: force anvil/blob networking to ipv4 on localhost. attempt to fix port flakes (#13099)\n\nWe occasionally get \"port in use\" or \"unable to find available port\"\nissues in tests that use the network stack.\nWhen I was facing these with TXE startups, I think I eventually\n\"resolved\" it by ensuring we bind explicitly to the loopback interface\nusing only ipv4 by directly specifying `127.0.0.1`.\nIf you provide `localhost` you might bind on ipv6, and some of our\ndefaults are `0.0.0.0` which attempts to bind on all available\ninterfaces - and I think that may actually be where the problem lies.\n\nThis is a bit of a wing - we can see if it works.",
          "timestamp": "2025-03-28T12:21:17Z",
          "tree_id": "f7043bb7e63a83a3c90364e35ab71a1e7d373f83",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/970dae5b7745165c81b93a0b7240b428cf94e782"
        },
        "date": 1743166145458,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 9690,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.24643834975023474,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 143240,
            "unit": "us"
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
          "id": "f87d5e30f06f84fea17928490283075019980851",
          "message": "refactor: metric attributes (#13126)\n\nDisallow attributes in metrics that could lead to high cardinality at\ncompile time.\n\n\n![image](https://github.com/user-attachments/assets/1bf57ecc-6530-4779-8582-bae47b90c6c9)\n\n\nFix #13063",
          "timestamp": "2025-03-28T12:38:07Z",
          "tree_id": "e824edc41ade9f62bcd7cf28390e070bca4171d6",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/f87d5e30f06f84fea17928490283075019980851"
        },
        "date": 1743167192383,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 9355,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.2379231969644807,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 138149,
            "unit": "us"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "68168980+just-mitch@users.noreply.github.com",
            "name": "just-mitch",
            "username": "just-mitch"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a406c549b2e479146b24ff79082fb6708623dc78",
          "message": "feat: get mana limit from rollup by default. (#13029)\n\nAnd check that the sequencer respects it",
          "timestamp": "2025-03-28T08:41:53-04:00",
          "tree_id": "fcfa994b6d1a6739f3a09d6e9b405be42185b848",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/a406c549b2e479146b24ff79082fb6708623dc78"
        },
        "date": 1743167236790,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 8569,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.21791567578592924,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 108944,
            "unit": "us"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "68168980+just-mitch@users.noreply.github.com",
            "name": "just-mitch",
            "username": "just-mitch"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a93ce6eb5ae91a42a3026a00d81a727022c2471c",
          "message": "fix: boolean config helper for cli args works now (#13110)\n\nUsing `booleanConfigHelper` without `[value]` in the commander flag was\nresulting in all our boolean cli args either using the default (if no\nvalue was provided), or to `false`, because the \"value\" supplied to the\n`parse` function was always `undefined`.\n\nThis resuled in, e.g. passing `--p2p-enabled` being interpreted as\nfalse.\n\nNow the expected behavior reigns: `--p2p-enabled` and\n`--p2p-enabled=true` and `--p2p-enabled true` all result in the flag\nbeing `true`, but `--p2p-enabled=false` and `--p2p-enabled false` result\nin the flag being `false`.\n\nIn the `testAccounts` case, since it was defined as `true` by default\nfor the sandbox, it was picking up that value when parsing for the node,\nso no matter what it was true.",
          "timestamp": "2025-03-28T08:53:37-04:00",
          "tree_id": "52fd37c68786193adaee74e1a4cf8658194f13fe",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/a93ce6eb5ae91a42a3026a00d81a727022c2471c"
        },
        "date": 1743168415634,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 8435,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.21450242301937042,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 112108,
            "unit": "us"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "75146596+Sarkoxed@users.noreply.github.com",
            "name": "Sarkoxed",
            "username": "Sarkoxed"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bacae3d1fc7d70b7adf2946446af76d50eec1259",
          "message": "fix: fuzzing build issues (#13114)\n\nThis pr resolves the current issues with automated build for fuzzing",
          "timestamp": "2025-03-28T12:51:06Z",
          "tree_id": "e6ea8585120b018113e0902bdc9357bb886f8afe",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/bacae3d1fc7d70b7adf2946446af76d50eec1259"
        },
        "date": 1743168506012,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 9661,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.2456926394907676,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 140707,
            "unit": "us"
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
          "id": "1c08d38c040be51ce7c87023a1aaf821179f9e32",
          "message": "chore: fuzzing build in ci (#13105)\n\nSet for now not to create object files, just sanity check the build.\nAlso moved to zstd compression (toggled via file suffix check of .zst)\nfor speed\n\n---------\n\nCo-authored-by: Sarkoxed <75146596+Sarkoxed@users.noreply.github.com>",
          "timestamp": "2025-03-28T16:41:00+03:00",
          "tree_id": "41e68df8ec1e660c1fe50e59153964abb2322581",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/1c08d38c040be51ce7c87023a1aaf821179f9e32"
        },
        "date": 1743171008041,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 9296,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.23640309848813126,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 147785,
            "unit": "us"
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
          "id": "7d875a6133c903341e8df11b5837dda80048a827",
          "message": "chore(avm): remove check_interaction from tests (#13136)\n\nWe think this gets sufficiently tested with the lookup builders (once https://github.com/AztecProtocol/aztec-packages/issues/13140 is solved).",
          "timestamp": "2025-03-28T16:55:47Z",
          "tree_id": "a3586711ccfadec678d2f6d2fd43f7bfe993a2ba",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/7d875a6133c903341e8df11b5837dda80048a827"
        },
        "date": 1743183115034,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 8550,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.21745006313662582,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 113489,
            "unit": "us"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "75146596+Sarkoxed@users.noreply.github.com",
            "name": "Sarkoxed",
            "username": "Sarkoxed"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aea210ba4c16dddc0088e20034d718f07e456dad",
          "message": "chore: Add ultra versions of fuzzers in stdlib (#13139)\n\nThis pr adds `*_ultra_fuzzer` versions for all the existing fuzzers in\nstdlib",
          "timestamp": "2025-03-28T20:03:28+03:00",
          "tree_id": "24f6dc991b559b3727cf016996da642fcba01752",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/aea210ba4c16dddc0088e20034d718f07e456dad"
        },
        "date": 1743183582635,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 8755,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.22265620390320778,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 114529,
            "unit": "us"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "152162806+sklppy88@users.noreply.github.com",
            "name": "esau",
            "username": "sklppy88"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c5f998439ca29956a62466d202974e85ab58b7c0",
          "message": "feat: add ecdsa non ssh account to cli wallet (#13085)\n\nAfter the addition of ecdsa non-ssh by @Thunkar, this simply adds it to\nbe useable in the cli wallet.\n\nCo-authored-by: sklppy88 <esau@aztecprotocol.com>",
          "timestamp": "2025-03-28T18:07:44+01:00",
          "tree_id": "8cca3cbcd796d4dbafbe36a886d784fa3487b553",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/c5f998439ca29956a62466d202974e85ab58b7c0"
        },
        "date": 1743183623631,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 8561,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.21772878396296869,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 110829,
            "unit": "us"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "51711291+natebeauregard@users.noreply.github.com",
            "name": "Nate Beauregard",
            "username": "natebeauregard"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "455587132be156a18f7849ca585fe0ff4ae2637b",
          "message": "fix: validate private double spends in txs with public funcs (#13088)\n\nFixes https://github.com/AztecProtocol/aztec-packages/issues/12902\n\nThe post-processing double-spend validation broke once the\nPublicTxSimulator+AVM started performing all nullifier insertions.\n\nThis PR removes the post-processing double spend validation and instead\nchecks all txs (regardless of if the tx is private-only or has public\ncalls) for duplicate nullifiers during pre-processing. Then, the\nPublicTxSimulator+AVM will ensure that any nullifiers added during\npublic execution cannot cause collisions.\n\nsee\nhttps://demerzelsolutions.slack.com/archives/C04BTJAA694/p1743001880033519\nfor additional info",
          "timestamp": "2025-03-28T15:24:01-03:00",
          "tree_id": "450601e7eeca275260d00a06cc777097ef2433d4",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/455587132be156a18f7849ca585fe0ff4ae2637b"
        },
        "date": 1743187769745,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 8509,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.21639518087932183,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 109138,
            "unit": "us"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "santiago@aztecprotocol.com",
            "name": "Santiago Palladino",
            "username": "spalladino"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7c520a8825c919cfb0ece990dbfd4d6a087ac927",
          "message": "chore: Cron snapshot upload in spartan (#13108)\n\nAdds a cronjob to the spartan templates that curls the full node and\ninstructs it to start a snapshot upload to a gcs bucket. The admin api\nis exposed via a new service defined on the full node, which should not\nget exposed to the outside world based on the firewall rules we have\ndefined in terraform.",
          "timestamp": "2025-03-28T18:48:58Z",
          "tree_id": "0a0685ffcc35de89064cfbd3bca44a84f87fbb81",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/7c520a8825c919cfb0ece990dbfd4d6a087ac927"
        },
        "date": 1743189365292,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 8613,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.21904936518398724,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 108910,
            "unit": "us"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aakoshh@gmail.com",
            "name": "Akosh Farkash",
            "username": "aakoshh"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "493dede81c2b22426025a398ac81f6b3b8ad9e81",
          "message": "feat(noir): Allow missing optional fields in msgpack (#13141)\n\nFollowup for https://github.com/AztecProtocol/aztec-packages/pull/12841\n\nChanges code generation for msgpack so that it doesn't throw an error if\nan optional field of a `struct` is not present in the data. This is to\nallow @TomAFrench and @asterite to delete `Opcode::MemoryOp::predicate`\nwhich is an optional field that we no longer use. Removing such a field\nshould be a non-breaking change, as the field was optional to begin\nwith, so while even if it's present in C++ it should already handle it\nbeing empty.\n\nUnfortunately the `msgpack-c` library as far as I can see [would throw\nan\nerror](https://github.com/AztecProtocol/msgpack-c/blob/54e9865b84bbdc73cfbf8d1d437dbf769b64e386/include/msgpack/v1/adaptor/detail/cpp11_define_map.hpp#L33-L45)\nif the optional field would not be present in the data as NIL.\n\nFor this to work the PR re-introduces the `Helpers` and enumerates\nfields explicitly, instead of using `MSGPACK_FIELDS`. I changed the\nunmerged https://github.com/noir-lang/noir/pull/7716 to do codegen with\nthis change.\n\nI rebased https://github.com/AztecProtocol/aztec-packages/pull/13021 on\ntop of this PR to see if it works when msgpack is actually in use.\n\n### Note for future migration path\n\n@ludamad reached out that while the bytecode size increase shown in\nhttps://github.com/noir-lang/noir/pull/7690 doesn't seem too bad, and\ncompression compensates for the inclusion of string field names, it's\nstill wasteful to have to parse them, and it would be better to use\narrays.\n\nI established in\n[tests](https://github.com/noir-lang/noir/pull/7690/files#diff-2d66028e5a8966511a76d1740d752be294c0b6a46e0a567bc2959f91d9ce224bR169-R176)\nthat we what we call `msgpack-compact` format uses arrays for structs,\nbut still tags enums with types. We use a lot of enums, so there is\nstill quite a few strings. Ostensibly we could use [serde\nattributes](https://serde.rs/container-attrs.html) to shorten names, but\nit would probably be a nightmare and ugly.\n\nNevertheless if we generated C++ code to deal with arrays, we could save\nsome space.\n\nAnd if we want to stick to `bincode`, we can use\n`NOIR_SERIALIZATION_FORMAT=bincode`, which I back ported to the Noir\ncodegen PR, to generate `bincode` with a format byte marker. There is\nalso `bincode-legacy`, but unfortunately we only have one shot at\ndeserialising bincode in C++: if it fails, we can't catch the exception.\nTherefore the path to be able to use the bincode format marker is:\n1. Release `bb` which can handle the `msgpack` format (which has a\nprobe, doesn't have to throw)\n2. Start producing msgpack data from `nargo` \n3. Stop accepting unmarked bincode in `bb` and look for format byte == 1\nto show that bincode is in use\n4. Tell `nargo` which format to use\n\nEDIT: Unfortunately if we use `binpack` with today's data types it\nforces us to parse the Brillig part, as established by\nhttps://github.com/AztecProtocol/aztec-packages/pull/13143 which would\nmean the Noir team can't make any changes to Brillig opcodes without\nbreaking `bb`. We would need to change the format again to use two tier\nencoding, or use msgpack arrays.",
          "timestamp": "2025-03-28T18:40:28Z",
          "tree_id": "3e1ee8c69b353e2534034efc9f4fc47e9e24a838",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/493dede81c2b22426025a398ac81f6b3b8ad9e81"
        },
        "date": 1743189376082,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 8495,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.21604053438922424,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 109249,
            "unit": "us"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "santiago@aztecprotocol.com",
            "name": "Santiago Palladino",
            "username": "spalladino"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09e47221a56deec80324a8e2cb3e482bc9b000fe",
          "message": "chore: Add e2e test to bootstrap test_cmds (#13146)\n\nAdds test added in #13088",
          "timestamp": "2025-03-28T18:52:32Z",
          "tree_id": "6b71fef2b475b84a1086e3b84d46fef3fab2f2b0",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/09e47221a56deec80324a8e2cb3e482bc9b000fe"
        },
        "date": 1743189484581,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 8409,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.21385301326380543,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 109676,
            "unit": "us"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "janbenes1234@gmail.com",
            "name": "Jan Beneš",
            "username": "benesjan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6307ba073e362a63dc50b7dbbeb9db2556aee6ed",
          "message": "feat: derived pending notes capsules slot (#13102)",
          "timestamp": "2025-03-28T21:52:11+01:00",
          "tree_id": "e4320018b0e38da00626f31fcf620952227e8e48",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/6307ba073e362a63dc50b7dbbeb9db2556aee6ed"
        },
        "date": 1743196713887,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sequencer/aztec.sequencer.block.build_duration",
            "value": 8593,
            "unit": "ms"
          },
          {
            "name": "Sequencer/aztec.sequencer.block.time_per_mana",
            "value": 0.21852468738950845,
            "unit": "us/mana"
          },
          {
            "name": "Sequencer/aztec.sequencer.block_builder_tree_insertion_duration",
            "value": 105731,
            "unit": "us"
          }
        ]
      }
    ]
  }
}