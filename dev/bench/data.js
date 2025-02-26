window.BENCHMARK_DATA = {
  "lastUpdate": 1740592706563,
  "repoUrl": "https://github.com/AztecProtocol/aztec-packages",
  "entries": {
    "C++ Benchmark": [
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
          "id": "2b91bb2ac7be55d51bbd6d32c84df45e3b026312",
          "message": "fix: don't try to get bench artifacts on external PR (#12157)",
          "timestamp": "2025-02-21T02:03:42+08:00",
          "tree_id": "5f595b6ed91f22a2fe294417e1caa29263c41c61",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/2b91bb2ac7be55d51bbd6d32c84df45e3b026312"
        },
        "date": 1740075345949,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18275.414823000006,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16002.203463000002 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18698.170157999983,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16298.890077 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 3822.322208000003,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3067.9369809999994 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 54700.503288,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 54700503000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 9300.645835000001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 9300650000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1814502432,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1814502432 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 129861415,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 129861415 ns\nthreads: 1"
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
          "id": "5efd21c060bc7a40abd548c80fca0a76b64bfba5",
          "message": "chore(ci3): update ci.md with swc notes (#12147)\n\nCo-authored-by: Santiago Palladino <santiago@aztecprotocol.com>",
          "timestamp": "2025-02-20T13:11:12-05:00",
          "tree_id": "a5d881d1bac750dac822e856e1ff438ee3434e97",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/5efd21c060bc7a40abd548c80fca0a76b64bfba5"
        },
        "date": 1740075808110,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18051.77887000002,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 15889.040072999998 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18666.800728,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16376.771206000001 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 4021.102923000001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3053.7823739999994 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 54802.144065,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 54802140000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 11375.091290999999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 11375101000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1830674812,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1830674812 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 129330575,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 129330575 ns\nthreads: 1"
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
          "id": "e00a86cfa97a3d33957ffd0cc1d2b60474b57db3",
          "message": "test: verify proving is resumed after broker crash (#11122)\n\nThis test: starts proving an epoch, kills the broker, verifies the epoch\nis still proven correctly after the broker recovers\n\nThis test is currently failing because it needs #10981 first to be\nmerged in.",
          "timestamp": "2025-02-20T18:14:49Z",
          "tree_id": "5304cd7d1ddbe1077f54f44e26b7609a16903dde",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/e00a86cfa97a3d33957ffd0cc1d2b60474b57db3"
        },
        "date": 1740076812110,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18390.336538999916,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16230.280509 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18768.739549999962,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16346.594033 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 3989.856834000193,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3186.7133479999998 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 55195.114391,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 55195114000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 11470.02628,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 11470029000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1830069883,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1830069883 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 133655668,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 133655668 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gregojquiros@gmail.com",
            "name": "Gregorio Juliana",
            "username": "Thunkar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8831838aab69f26686855730811d07c7d99d361a",
          "message": "chore: @aztec/stdlib pt. 3: aztec-address out of foundation (#12140)\n\nFinal cleanup `foundation` and removal of all aztec-specific references.\nThis paves the way for the new stdlib to be born from the remnants of\n`circuits.js` and `circuit-types`!\n\nThis has led to a single \"weird thing\":\n\n`@aztec/ethereum` requires `AztecAddress` *just for the deployment of l1\ncontracts*. In the end, this is just an arg provided to `viem` that gets\neventually stringified, so we only have the type to avoid making\nmistakes ourselves. Since this is a pretty internal method, to avoid\ncircular dependencies I've turned it into a `Fr`, as that's our\n\"flattened\" AztecAddress representation. @alexghr @spalladino how bad is\nit?\n\nAnother option would be to move `deployL1Contracts` to `circuits.js`\n(soon to be `stdlib`), as this package pulls from `ethereum` and has\naccess to AztecAddress.\n\n---------\n\nCo-authored-by: thunkar <gregjquiros@gmail.com>",
          "timestamp": "2025-02-20T19:25:54+01:00",
          "tree_id": "95de7bce4cb41c9bcafde616cf28102b5870518e",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/8831838aab69f26686855730811d07c7d99d361a"
        },
        "date": 1740077488687,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18396.944177000023,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16254.126714999999 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18804.310319999786,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16565.136599999998 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 3919.6321000001717,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3097.849819 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 55196.903116999994,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 55196902000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 10494.42185,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10494426000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1818503171,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1818503171 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 128064425,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 128064425 ns\nthreads: 1"
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
          "id": "db2a503e1918dd0ffa6d251e8145821b21a452ff",
          "message": "feat: Barretenberg C++ binary overhaul (#11459)\n\nOverhaul the Barretenberg binary and its API.\n- Breaks up bb main into different files organized by proving system /\nIVC scheme.\n- Make UltraHonk conform to the new API interface introduced earlier for\nClient IVC.\n- Refines the API a bit.\n- Introduces [CLI11](https://github.com/CLIUtils/CLI11) to: provide help\n/ documentation; validate opts (options can be required, exlusive of\neach other, validated against predicates like \"path exists\" or \"string\nis in list\"); also allows for easy environment variable aliasing.\n\nThis could definitely use some more a help. \n - Lots of documentation needed\n- Defaults are set in a weird and inconsistent way and that information\nisn't included in the documentation.\n- The help menus are perhaps too verbose. Subcommands can't inherit\noptions or flags so we end up repeating.\n- Empty string cannot be passed and parsed to a \"nothing argument\" which\ncan lead to frustrating debugging...\n - Little option validation is actually implemented.\n - Deprecated options aren't noted but they could be.\n\nIt was requested that the default change from UltraPlonk to UltraHonk,\nbut we get rid of a default set of commands altogether. As a workaround,\nwe can have users set `BB_SCHEME=ultra_honk`.\n\nNewly created issues:\nhttps://github.com/AztecProtocol/barretenberg/issues/1252,\nhttps://github.com/AztecProtocol/barretenberg/issues/1253,\nhttps://github.com/AztecProtocol/barretenberg/issues/1254,\nhttps://github.com/AztecProtocol/barretenberg/issues/1255,\nhttps://github.com/AztecProtocol/barretenberg/issues/1256,\nhttps://github.com/AztecProtocol/barretenberg/issues/1257,\nhttps://github.com/AztecProtocol/barretenberg/issues/1258,\nhttps://github.com/AztecProtocol/barretenberg/issues/1259\n\nResolves https://github.com/AztecProtocol/barretenberg/issues/1260\n\nNB the line count is large because 1) CLI11 is a single 11k-line header;\n2) I moved a lot of functions and some git mvs didn't show up as such.\nMain new code is api_ultra_honk.hpp.\n\n---------\n\nCo-authored-by: ludamad <adam.domurad@gmail.com>",
          "timestamp": "2025-02-20T14:12:17-05:00",
          "tree_id": "609c7313ba844c7d1e54626d92a51d472f323db5",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/db2a503e1918dd0ffa6d251e8145821b21a452ff"
        },
        "date": 1740080971424,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18278.38828600011,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16138.557612999999 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18762.107399000117,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16345.549768 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 4028.44974300001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3114.5213369999997 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 54677.755524,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 54677757000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 10862.722009000001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10862725000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1821180682,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1821180682 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 129311987,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 129311987 ns\nthreads: 1"
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
          "id": "b2c5744f46f8ed3a7706e625489f7e8b96570591",
          "message": "chore: Fix linter errors (#12164)",
          "timestamp": "2025-02-21T03:45:20+08:00",
          "tree_id": "214189f0d4e5939d77735a5c855bf291b96c3086",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/b2c5744f46f8ed3a7706e625489f7e8b96570591"
        },
        "date": 1740082048821,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18088.37210899992,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 15913.639127 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18756.6091220001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16627.828038999996 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 4004.538420000017,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3190.2140550000004 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 54715.892931,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 54715895000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 10789.354886,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10789358000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1808614475,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1808614475 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 127403720,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 127403720 ns\nthreads: 1"
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
          "id": "481d3beaba9fcc85743919bc640a849dad7b7b88",
          "message": "fix: retry rm operation in cleanup (#12162)\n\nFix #12141",
          "timestamp": "2025-02-20T17:03:10-03:00",
          "tree_id": "dcbdd62ca1a5d2ed0437c0c3122ede00b17dff47",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/481d3beaba9fcc85743919bc640a849dad7b7b88"
        },
        "date": 1740083317230,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18367.663207000078,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16172.462602 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18882.087290000072,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16342.458376999999 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 3954.3460969998705,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3185.5812720000004 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 55105.409963,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 55105408000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 10648.371583999999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10648374000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1814861940,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1814861940 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 127991101,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 127991101 ns\nthreads: 1"
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
          "id": "94d0b9b94e26bfa4b8e6069c089701f35d12aa3e",
          "message": "fix: ASSERTS that should throw (#12167)\n\nI did e2e and e2e_all in\nhttps://github.com/AztecProtocol/aztec-packages/pull/11459 and the\ndarwin builds didn't fail there, but they fail in master. This is\nbasically a typo fix.",
          "timestamp": "2025-02-20T16:27:20-05:00",
          "tree_id": "7d808a0d842fbaf37c649ddb4a3b3a14b4500ddc",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/94d0b9b94e26bfa4b8e6069c089701f35d12aa3e"
        },
        "date": 1740088629401,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18401.915873000005,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16234.546625 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18770.98970799989,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16358.921682999999 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 3928.8175990000127,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3192.524564 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 54918.76687400001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 54918767000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 10640.891133999998,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10640895000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1849008533,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1849008533 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 128856934,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 128856934 ns\nthreads: 1"
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
          "id": "06e1041f38eaf6b68c621369d95993496e445062",
          "message": "fix(ci): don't have checks go green immediately (#12168)\n\nWe can't have overlapping check names here. We have to split this out to\nits own repo. This is probably a good separation of concerns, too, to\nprevent people just leaking secrets without stopping to think.",
          "timestamp": "2025-02-20T16:52:36-05:00",
          "tree_id": "cfbcc37d1ea54e0d47d91d3f0659e6caa63025c3",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/06e1041f38eaf6b68c621369d95993496e445062"
        },
        "date": 1740089083282,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 17973.176707999985,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 15946.519593 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18615.35791,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16343.199058 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 3865.1225970000382,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3108.192513 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 54769.314765999996,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 54769315000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 10592.253077999998,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10592256000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1822248343,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1822248343 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 132696508,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 132696508 ns\nthreads: 1"
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
          "id": "7768ffe4e25cb234328be04f4fff8947f6390415",
          "message": "chore(spartan): workaround bot + transfer test conflict (#12165)\n\nUntil #12163, disable bot which interferes with the transfer test",
          "timestamp": "2025-02-20T17:28:01-05:00",
          "tree_id": "9c567e11c6385ff3566c1517d10387d536cfb033",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/7768ffe4e25cb234328be04f4fff8947f6390415"
        },
        "date": 1740091205418,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18137.002772000018,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16021.873844000002 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18624.61639099996,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16332.193616000002 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 3855.399848999923,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3058.315564000001 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 54917.17576,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 54917174000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 9772.573803,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 9772579000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1820323753,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1820323753 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 128813543,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 128813543 ns\nthreads: 1"
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
          "id": "f7a65ee697aa7e1a2bbdfcafe9d846aadd9aa2c2",
          "message": "fix: work around matrix restriction on status checks (#12173)\n\nand the merge-check is revived",
          "timestamp": "2025-02-20T17:35:46-05:00",
          "tree_id": "b088846028592bfe2f5f94c2ee331951f5c80c97",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/f7a65ee697aa7e1a2bbdfcafe9d846aadd9aa2c2"
        },
        "date": 1740091676006,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18203.68625000003,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16158.835127 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18498.485044999994,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16156.524540000002 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 3882.771124000044,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3039.0720039999997 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 54771.203354,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 54771204000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 10968.120658,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10968123000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1817594499,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1817594499 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 128756795,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 128756795 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "critesjosh@gmail.com",
            "name": "josh crites",
            "username": "critesjosh"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "321854c86cafeeb72b19f6b8353ebd9b56b81261",
          "message": "fix(docs): Escape $ in notes page (#12170)\n\nFixes a formatting error. Now renders properly:\n\n\n![image](https://github.com/user-attachments/assets/0925e93e-edaa-45ad-8e2b-ab650720169b)\n\nCo-authored-by: ludamad <adam.domurad@gmail.com>",
          "timestamp": "2025-02-20T19:15:11-05:00",
          "tree_id": "cc761ebbcd55522fead30be978f58c0f1cdde7cc",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/321854c86cafeeb72b19f6b8353ebd9b56b81261"
        },
        "date": 1740097602252,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18057.729859999996,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 15900.661340999999 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18563.499621999996,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16170.933662000003 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 3878.6432869999885,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3070.129144 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 55054.548623,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 55054548000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 11321.878781000001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 11321882000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1832254534,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1832254534 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 136657595,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 136657595 ns\nthreads: 1"
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
          "id": "ac2300e76c51b67cd76167b4f77d192ae69bb970",
          "message": "fix(p2p): prune duplicate peers (#12128)",
          "timestamp": "2025-02-21T09:37:39+08:00",
          "tree_id": "a75dd2c06a0aa552261fd6c4d8ff26d7c43d3bb9",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/ac2300e76c51b67cd76167b4f77d192ae69bb970"
        },
        "date": 1740103148332,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18169.9808379999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16050.749553 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18520.709226000006,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16278.897231000003 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 3837.571634000142,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3162.675602 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 54634.904751,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 54634882000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 10475.022782,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10475029000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1824924019,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1824924019 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 128388381,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 128388381 ns\nthreads: 1"
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
          "id": "0fb5904f18615a194cb6718365dd1b48df5b781c",
          "message": "fix: log failure to remove tmp dir (#12180)\n\nLeftover from #12162",
          "timestamp": "2025-02-21T09:57:25Z",
          "tree_id": "dff5b43d136ebd784c4faf4e56f4062cea556c2d",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/0fb5904f18615a194cb6718365dd1b48df5b781c"
        },
        "date": 1740133133137,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18093.536103999897,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16006.202509 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18648.805807000143,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16407.808071000003 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 3880.7457050002085,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3057.371494000001 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 54918.263412,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 54918263000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 11117.922175,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 11117925000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1821500303,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1821500303 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 136959012,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 136959012 ns\nthreads: 1"
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
          "id": "e332eeb6d4d02d6b1d124ba6d6b5c62e12dd3ac8",
          "message": "chore(avm): modify interaction label processing (#12181)\n\nPlease read [contributing guidelines](CONTRIBUTING.md) and remove this line.",
          "timestamp": "2025-02-21T10:12:21Z",
          "tree_id": "b00ef6559b8aa916c9074f8c67757ba374ac3372",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/e332eeb6d4d02d6b1d124ba6d6b5c62e12dd3ac8"
        },
        "date": 1740134531490,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18387.22418200018,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16070.678356000002 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18760.8471850001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16284.003556000001 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 3995.781688000079,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3182.757996 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 54912.499047,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 54912501000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 10269.883287,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10269899000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1824968919,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1824968919 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 131162436,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 131162436 ns\nthreads: 1"
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
          "id": "e2f675f98cf887871f633db51b83ec50af6e5f83",
          "message": "fix: Fix epoch monitoring and related e2e tests (#12096)\n\nFixes the prover-node's epoch monitor so it accounts for the previous\nepoch to be proven. The updated logic is that an epoch is ready to prove\nonly if it is completed and it contains the first unproven block (which\ngets updated over a reorg).\n\nAlso fixes #11840 \n\nBuilds on top of @PhilWindle's #12014\n\n---------\n\nCo-authored-by: PhilWindle <philip.windle@gmail.com>",
          "timestamp": "2025-02-21T09:04:51-03:00",
          "tree_id": "17349e5c88f5897cbb0dda2cdd071c962ea6cd8c",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/e2f675f98cf887871f633db51b83ec50af6e5f83"
        },
        "date": 1740141167561,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18387.406677999934,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16216.388550000001 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18908.683499000064,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16445.991206 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 4095.2355709998756,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3152.8012390000004 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 55045.208420999996,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 55045208000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 10150.565249000001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10150579000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1826167779,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1826167779 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 127532963,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 127532963 ns\nthreads: 1"
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
          "id": "1691e1f8da94c6fb3c37a576ce2cd2427785a530",
          "message": "chore: re-exporting deployAccountMethod (#12158)",
          "timestamp": "2025-02-21T20:54:19+08:00",
          "tree_id": "e76501ed793da9a113c236b406aadc2b9a2768fe",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/1691e1f8da94c6fb3c37a576ce2cd2427785a530"
        },
        "date": 1740143935379,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18459.760411999923,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16262.616564999998 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18844.619160000093,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16445.207163 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 4055.1084329999867,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3132.5966209999997 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 55086.569692,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 55086570000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 10814.143949,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10814146000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1846177478,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1846177478 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 129553719,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 129553719 ns\nthreads: 1"
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
          "id": "ad5b3e9271a2cb4caa3e225f0e1350cf7e9f6c03",
          "message": "chore: redo typo PR by gap-editor (#12184)\n\nThanks gap-editor for\nhttps://github.com/AztecProtocol/aztec-packages/pull/12183. Our policy\nis to redo typo changes to dissuade metric farming. This is an automated\nscript.",
          "timestamp": "2025-02-21T13:59:37Z",
          "tree_id": "932c92e7e878d4101033f291106ed78a9ce52c1a",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/ad5b3e9271a2cb4caa3e225f0e1350cf7e9f6c03"
        },
        "date": 1740147122148,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18105.028485000046,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16027.11738 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18654.110237000055,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16283.502813000003 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 3842.821866999998,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3039.6774360000004 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 54477.764682,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 54477765000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 9578.987156000001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 9578988000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1830918490,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1830918490 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 130736503,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 130736503 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mike@aztecprotocol.com",
            "name": "Michael Connor",
            "username": "iAmMichaelConnor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e26c3fffc671a854a59efeec1237d8057292573",
          "message": "chore: address extra decryption oracle pr comments (#12065)\n\nAES decryption oracle returns a BoundedVec instead of pkcs#7 padded_plaintext",
          "timestamp": "2025-02-21T14:28:16Z",
          "tree_id": "06bb99fd9fb64d730bc7e03c41d44ddb7b9a7385",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/0e26c3fffc671a854a59efeec1237d8057292573"
        },
        "date": 1740149641123,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18255.25892199994,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16068.111152 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18838.98814700001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16327.962819 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 3990.4092330000367,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3193.7612750000003 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 55218.725875,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 55218726000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 10927.798916999998,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10927802000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1846984573,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1846984573 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 132579143,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 132579143 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nicolas.venturo@gmail.com",
            "name": "Nicolás Venturo",
            "username": "nventuro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "436def34af89eeb0529d113f3c080b7dc0c2064a",
          "message": "feat!: remove addNote, compute_note_hash_... (#12171)\n\nThis removes the `addNote` function from PXE (`addNullifiedNote` had\nbeen removed in #11822). With this change, PXE no longer needs to\nunderstand how to compute note hashes and perform nonce discovery, which\nmeans we can also get rid of all of that code, _plus_ we can delete the\nmandatory `compute_note_hash_and_optionally_a_nullifier` contract\nfunction, _plus_ all of the auxiliary code used to call those.\n\nInstead, contracts that wish to deliver notes to their recipients via\noffchain mechanisms (i.e. not the protocol logs) must create custom\nunconstrained functions that know how to construct said notes and add\nthem to PXE. For cases such as `TransparentNote`, where all of the note\ncontents are public already, this is quite simple:\n`aztec::discovery::process_private_log` can be leveraged to a great\ndegree by mimicking the log encoding aztec-nr uses - see the\nTokenBlacklist and Test contracts for examples of this. More fine\ngrained control could be achieved by calling\n`aztec::discovery::attempt_note_nonce_discovery` and then the\n`deliver_note` oracle (which is essentially what `process_private_log`\ndoes, sans the decoding).\n\nThe removal of `compute_note_hash_and_optionally_a_nullifier` freed us\nfrom some legacy burdens in having to produce the 4 field array, dealing\nwith optional nullifier computation, etc., which in turn allowed for the\ncontract library method `_compute_note_hash_and_optionally_a_nullifier`\nto be streamlined and converted into the new\n`compute_note_hash_and_nullifier`, which matches\n`aztec::discovery::ComputeNoteHashAndNullifier` and hence results in\nmuch easier use of the discovery functions.\n\nTagging @critesjosh since `addNote` was quite a basic and old primitive.\n\nCloses #11638.",
          "timestamp": "2025-02-21T15:07:20Z",
          "tree_id": "f20621b67efceeebfd123d26b933305b44aa3fca",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/436def34af89eeb0529d113f3c080b7dc0c2064a"
        },
        "date": 1740152176187,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18455.252729999986,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16179.917882999998 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18995.27534999993,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16493.72379 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 3987.060364000172,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3163.2282189999996 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 55050.451955,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 55050452000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 10795.075085,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10795081000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1844748146,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1844748146 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 134129480,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 134129480 ns\nthreads: 1"
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
          "id": "ed9a416c1d4dfb8a3a327baebdf61d5f54881355",
          "message": "feat: Sync from noir (#12176)\n\nAutomated pull of development from the\n[noir](https://github.com/noir-lang/noir) programming language, a\ndependency of Aztec.\nBEGIN_COMMIT_OVERRIDE\nfeat: Sync from aztec-packages\n(https://github.com/noir-lang/noir/pull/7474)\nfix: don't panic when shifting too much\n(https://github.com/noir-lang/noir/pull/7429)\nchore: bump external pinned commits\n(https://github.com/noir-lang/noir/pull/7472)\nchore: remove `disable_macros` compile option\n(https://github.com/noir-lang/noir/pull/7468)\nchore(ci): add workflow to automate bumping aztec-packages commit\n(https://github.com/noir-lang/noir/pull/7465)\nchore: Release Noir(1.0.0-beta.3)\n(https://github.com/noir-lang/noir/pull/7346)\nchore(ci): Missing dash in profiler command argument\n(https://github.com/noir-lang/noir/pull/7467)\nfeat(experimental): show macro errors where they happen\n(https://github.com/noir-lang/noir/pull/7333)\nfeat: optimize FieldElement::num_bits\n(https://github.com/noir-lang/noir/pull/7147)\nchore(profiler): Docs on profiler command and more complete error\nreporting (https://github.com/noir-lang/noir/pull/7436)\nfeat(ci): Release noir-inspector in binaries\n(https://github.com/noir-lang/noir/pull/7464)\nchore(docs): Noir Profiler external documentation\n(https://github.com/noir-lang/noir/pull/7457)\nfeat(ci): Publish binaries for noir-profiler\n(https://github.com/noir-lang/noir/pull/7443)\nchore: Copy #7387 docs into v1.0.0-beta.2 versioned_docs\n(https://github.com/noir-lang/noir/pull/7458)\nfix: prevent incorrect ACIRgen caused by noop truncations\n(https://github.com/noir-lang/noir/pull/7456)\nfeat: add native `u128` type\n(https://github.com/noir-lang/noir/pull/7301)\nchore: standardize that doc comments on top of statements and expression\nare allowed but warn (https://github.com/noir-lang/noir/pull/7450)\nfix: don't let nargo fmt produce multiple trailing newlines\n(https://github.com/noir-lang/noir/pull/7444)\nEND_COMMIT_OVERRIDE\n\n---------\n\nCo-authored-by: Tom French <tom@tomfren.ch>",
          "timestamp": "2025-02-21T15:22:23Z",
          "tree_id": "461a0f7b5b34857e6943d9779e1d8e374e4a7ea8",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/ed9a416c1d4dfb8a3a327baebdf61d5f54881355"
        },
        "date": 1740153013716,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18407.163237000077,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16180.288506 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18789.364944999987,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16380.477103000001 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 3964.2892910001137,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3153.411128 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 55048.208085,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 55048208000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 9626.254036,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 9626255000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1837039363,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1837039363 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 129431981,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 129431981 ns\nthreads: 1"
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
          "id": "88b5878dd4b95d691b855cd84153ba884adf25f8",
          "message": "feat(avm): sha256 round read (#12032)\n\nPlease read [contributing guidelines](CONTRIBUTING.md) and remove this\nline.",
          "timestamp": "2025-02-21T15:52:29Z",
          "tree_id": "6fe56b94d2cf2aaea82ca579e5980fd2962d95bd",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/88b5878dd4b95d691b855cd84153ba884adf25f8"
        },
        "date": 1740154363122,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18254.840671000013,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16120.123538999998 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18729.343554000025,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16254.613828 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 3943.7366560000555,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3114.3202209999995 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 54873.541017999996,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 54873544000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 11184.966275,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 11184968000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1813920169,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1813920169 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 131297462,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 131297462 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "47148561+Maddiaa0@users.noreply.github.com",
            "name": "Maddiaa",
            "username": "Maddiaa0"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f56256e54a54ad908ebdad63468692a3c9cd295d",
          "message": "chore(spartan): flood publish configuration (#12190)",
          "timestamp": "2025-02-21T16:49:03Z",
          "tree_id": "96603f64b2944775a2300c65a7151b7b5e9045fb",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/f56256e54a54ad908ebdad63468692a3c9cd295d"
        },
        "date": 1740157342531,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18246.842347999973,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16047.686651 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18614.435230000025,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16451.064237999995 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 3985.754421000024,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3047.9255709999998 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 54719.773719000004,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 54719773000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 9302.866187,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 9302870000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1829289384,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1829289384 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 135693386,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 135693386 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "saleel@aztecprotocol.com",
            "name": "saleel",
            "username": "saleel"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d0013f2c68228faeac35cb5968f71dabc3d936dc",
          "message": "docs: update bb commands and fix links in readme (#12178)\n\n- Update new API names\n- Fix links to Noir docs",
          "timestamp": "2025-02-21T12:22:04-05:00",
          "tree_id": "73ee854e04beaf7479356d5f19e059db02bed769",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/d0013f2c68228faeac35cb5968f71dabc3d936dc"
        },
        "date": 1740159403506,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18082.453192,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 15929.382677 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18593.101707000074,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16167.689634999999 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 3916.2995990000127,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3057.081881 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 55015.49477,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 55015493000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 11350.669404,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 11350681000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1828504828,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1828504828 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 133847420,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 133847420 ns\nthreads: 1"
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
          "id": "fd323cc9d3f2a1e81f3ea2bc82e36c8fcf02db93",
          "message": "fix: Revert \"feat: add wasm memory benchmark to bench.json\" (#12204)\n\nbench code didn't execute properly",
          "timestamp": "2025-02-21T17:54:21-05:00",
          "tree_id": "5e631c85d6f90315a0ac198831868364d16e60c2",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/fd323cc9d3f2a1e81f3ea2bc82e36c8fcf02db93"
        },
        "date": 1740179288919,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18057.75719500002,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 15928.698677 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18666.189926000014,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16235.844681999999 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 3844.826229999967,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3104.21074 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 54798.984343,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 54798984000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 11213.816013000001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 11213816000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1816578951,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1816578951 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 128319092,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 128319092 ns\nthreads: 1"
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
          "id": "68c228d3c43b072a58b2e0fd3aa5e7a696400b0c",
          "message": "fix: delete deploy hooks after they are applied (#12189)",
          "timestamp": "2025-02-21T23:29:56Z",
          "tree_id": "36bb46604b8ecbd8ae298e3bd77fa959b9cabdfa",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/68c228d3c43b072a58b2e0fd3aa5e7a696400b0c"
        },
        "date": 1740181408420,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18244.393578000087,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16058.998344 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18555.38624899998,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16209.128962 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 3944.531513000129,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3123.7079179999996 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 55342.125301,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 55342126000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 10414.690582000001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10414699000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1814740922,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1814740922 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 134342920,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 134342920 ns\nthreads: 1"
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
          "id": "b35a61df37a8c26b5fa8cb8b60520ea982e04a65",
          "message": "feat: add wasm memory benchmark to bench.json (redo) (#12205)\n\nReinstates #11551 with e2e-all flag to test bench running.",
          "timestamp": "2025-02-21T19:34:11-05:00",
          "tree_id": "18dd13bc16a1b679bcb70b69731f42d4b535d817",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/b35a61df37a8c26b5fa8cb8b60520ea982e04a65"
        },
        "date": 1740185330636,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18058.540739000022,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 15802.331154 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18571.705784999947,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16320.107383 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 3851.2579190000906,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3074.8108449999995 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 54723.253657,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 54723253000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 11264.470395,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 11264474000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1818322940,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1818322940 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 127788707,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 127788707 ns\nthreads: 1"
          },
          {
            "name": "wasmUltraHonkVerifierWasmMemory",
            "value": "2249.31",
            "unit": "MiB/iter",
            "extra": "iterations: undefined\ncpu: undefined MiB\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "critesjosh@gmail.com",
            "name": "josh crites",
            "username": "critesjosh"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "17719739ab9a62c6371cf8e1cd59dd2f2d571387",
          "message": "fix: Fix broken error message link (#12187)\n\n- fixes a broken error message link\n- removes some redundant files from the docs\n- moves `mod test;` out of the code block reference for the counter\ncontract tutorial",
          "timestamp": "2025-02-22T00:55:53Z",
          "tree_id": "356f682699d42de124525a287c326f3e2f4a19e0",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/17719739ab9a62c6371cf8e1cd59dd2f2d571387"
        },
        "date": 1740187341110,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18100.50350300003,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16072.843147 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18812.31977699986,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16512.734104 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 3949.7023240001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3120.2308179999995 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 54857.74075800001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 54857740000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 11594.481318000002,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 11594482000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1845208593,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1845208593 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 140050899,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 140050899 ns\nthreads: 1"
          },
          {
            "name": "wasmUltraHonkVerifierWasmMemory",
            "value": "2249.31",
            "unit": "MiB/iter",
            "extra": "iterations: undefined\ncpu: undefined MiB\nthreads: undefined"
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
          "id": "6df809b891ad4023b1947b0c674daabd6761b91a",
          "message": "chore: Rename output_data_type and replace output_content by flag (#12198)\n\nSome small QOL improvements suggested by @saleel",
          "timestamp": "2025-02-21T20:33:27-05:00",
          "tree_id": "f1f47b9495c0abfce0f84ef4da606b88b0a0f249",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/6df809b891ad4023b1947b0c674daabd6761b91a"
        },
        "date": 1740189726206,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18292.656510999906,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16162.291377000003 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18734.581273999993,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16440.037995 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 4005.6864810001116,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3101.933337 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 54982.124484,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 54982123000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 9896.654186,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 9896658000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1823800546,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1823800546 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 130326842,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 130326842 ns\nthreads: 1"
          },
          {
            "name": "wasmUltraHonkVerifierWasmMemory",
            "value": "2249.31",
            "unit": "MiB/iter",
            "extra": "iterations: undefined\ncpu: undefined MiB\nthreads: undefined"
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
          "id": "5aaa7eee2463579eafadfbbe770619866c4dfcba",
          "message": "feat: bytecode hashing (#12142)\n\n```\n------- STATS -------\nprove/execute_log_derivative_inverse_commitments_round_ms: 128\nprove/execute_log_derivative_inverse_round_ms: 337\nprove/execute_pcs_rounds_ms: 2128\nprove/execute_relation_check_rounds_ms: 8229\nprove/execute_wire_commitments_round_ms: 1321\nproving/all_ms: 13251\nproving/construct_proof_ms: 12145\nproving/init_polys_to_be_shifted_ms: 55\nproving/init_polys_unshifted_ms: 30\nproving/prove:compute_polynomials_ms: 296\nproving/prove:construct_prover_ms: 1\nproving/prove:proving_key_ms: 548\nproving/prove:verification_key_ms: 110\nproving/set_polys_shifted_ms: 0\nproving/set_polys_unshifted_ms: 209\nsimulation/all_ms: 26\ntracegen/all_ms: 2305\ntracegen/alu_ms: 0\ntracegen/bytecode_decomposition_ms: 2137\ntracegen/bytecode_hashing_ms: 26\ntracegen/bytecode_retrieval_ms: 0\ntracegen/ecc_add_ms: 0\ntracegen/execution_ms: 0\ntracegen/instruction_fetching_ms: 0\ntracegen/interactions_ms: 61\ntracegen/poseidon2_hash_ms: 3\ntracegen/poseidon2_permutation_ms: 116\ntracegen/sha256_compression_ms: 0\ntracegen/traces_ms: 2243\n\nColumn sizes per namespace:\n  precomputed: 2097152 (~2^21)\n  execution: 6 (~2^3)\n  alu: 0 (~2^0)\n  bc_decomposition: 60506 (~2^16)\n  bc_hashing: 1953 (~2^11)\n  bc_retrieval: 1 (~2^0)\n  bitwise: 0 (~2^0)\n  ecc: 0 (~2^0)\n  instr_fetching: 6 (~2^3)\n  poseidon2_hash: 1953 (~2^11)\n  poseidon2_perm: 1952 (~2^11)\n  range_check: 0 (~2^0)\n  sha256: 0 (~2^0)\n  lookup: 196608 (~2^18)\n```",
          "timestamp": "2025-02-22T16:58:07Z",
          "tree_id": "4135703c0b18dddf2f3980b5a4e0880a79089fd5",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/5aaa7eee2463579eafadfbbe770619866c4dfcba"
        },
        "date": 1740245032008,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18367.18967599995,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16133.616360000002 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18724.327532999952,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16300.345942 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 3923.8447400000496,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3168.463304 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 54660.264289000006,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 54660265000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 10931.801844000001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10931806000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1822876239,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1822876239 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 133235492,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 133235492 ns\nthreads: 1"
          },
          {
            "name": "wasmUltraHonkVerifierWasmMemory",
            "value": "2249.31",
            "unit": "MiB/iter",
            "extra": "iterations: undefined\ncpu: undefined MiB\nthreads: undefined"
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
          "id": "912f2c539bcf382e28df4afa0fc44fec89f3cd85",
          "message": "feat(p2p): gossipsub scoring adjustments + testbench",
          "timestamp": "2025-02-23T02:27:21Z",
          "url": "https://github.com/AztecProtocol/aztec-packages/pull/12075/commits/912f2c539bcf382e28df4afa0fc44fec89f3cd85"
        },
        "date": 1740346393405,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 22016.579100999934,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 18605.236213 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18726.906290999978,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16319.063031 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 4164.433076999899,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3505.4332139999997 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 58844.636936,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 58844637000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 12702.943999000001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 12702947000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1915292072,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1915292072 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 159160617,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 159160617 ns\nthreads: 1"
          },
          {
            "name": "wasmUltraHonkVerifierWasmMemory",
            "value": "2249.31",
            "unit": "MiB/iter",
            "extra": "iterations: undefined\ncpu: undefined MiB\nthreads: undefined"
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
          "id": "d742834bb55548a1bc94a773b1eb40e8c9b397ae",
          "message": "feat(p2p): gossipsub scoring adjustments + testbench in ci",
          "timestamp": "2025-02-23T02:27:21Z",
          "url": "https://github.com/AztecProtocol/aztec-packages/pull/12075/commits/d742834bb55548a1bc94a773b1eb40e8c9b397ae"
        },
        "date": 1740393339852,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 22007.076390000067,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 18618.862093999996 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18840.81777600011,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16248.153754 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 4075.606318000041,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3477.7401210000003 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 58449.341547,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 58449342000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 12719.646217,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 12719653000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1944721650,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1944721650 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 156147752,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 156147752 ns\nthreads: 1"
          },
          {
            "name": "wasmUltraHonkVerifierWasmMemory",
            "value": "2249.31",
            "unit": "MiB/iter",
            "extra": "iterations: undefined\ncpu: undefined MiB\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "47148561+Maddiaa0@users.noreply.github.com",
            "name": "Maddiaa",
            "username": "Maddiaa0"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "208404e1b3823ed21781a4c3bcace7619411b0f9",
          "message": "fix(blob-sink): type check next slot (#12117)",
          "timestamp": "2025-02-24T11:17:17Z",
          "tree_id": "c3a62148825c023c5b68359e086ec0af6651763a",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/208404e1b3823ed21781a4c3bcace7619411b0f9"
        },
        "date": 1740397260690,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18435.80145200008,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16102.147178 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18828.950947000067,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16502.334918 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 4028.1630810000024,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3209.2624869999995 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 54967.090252999995,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 54967090000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 11751.065045,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 11751076000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1832845950,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1832845950 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 131226984,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 131226984 ns\nthreads: 1"
          },
          {
            "name": "wasmUltraHonkVerifierWasmMemory",
            "value": "2249.31",
            "unit": "MiB/iter",
            "extra": "iterations: undefined\ncpu: undefined MiB\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "47148561+Maddiaa0@users.noreply.github.com",
            "name": "Maddiaa",
            "username": "Maddiaa0"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "220612520525c03cadec2eea439055430fa67064",
          "message": "fix(spartan): each tx bot replica gets its own l1 private key (#12219)",
          "timestamp": "2025-02-24T12:47:47Z",
          "tree_id": "ebd263e59a28f98e6eb68bf4efb37454a5f1539d",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/220612520525c03cadec2eea439055430fa67064"
        },
        "date": 1740402599457,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18162.572875000023,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 15960.390959 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18603.143216000033,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16266.450794 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 3825.6271200000356,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3091.4730820000004 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 54885.904406999995,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 54885905000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 10330.583151,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10330590000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1818401743,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1818401743 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 128774542,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 128774542 ns\nthreads: 1"
          },
          {
            "name": "wasmUltraHonkVerifierWasmMemory",
            "value": "2249.31",
            "unit": "MiB/iter",
            "extra": "iterations: undefined\ncpu: undefined MiB\nthreads: undefined"
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
          "id": "ec7d34987bca0c42c5e0ba5cced2f29d42cc65db",
          "message": "chore!: Remove msm opcode (#12192)\n\nThe MSM opcode is now transpiled to a procedure that implements it via\necadd. We can safely remove it now.",
          "timestamp": "2025-02-24T15:04:12+01:00",
          "tree_id": "8b62fd6280f24370f78325850652091d5f84751b",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/ec7d34987bca0c42c5e0ba5cced2f29d42cc65db"
        },
        "date": 1740407856241,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18435.85760200017,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16323.372298999999 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18743.88933099999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16384.951856 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 3978.705810000065,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3119.5890900000004 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 55025.413647999994,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 55025408000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 10711.259893,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10711265000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1812277723,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1812277723 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 132411961,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 132411961 ns\nthreads: 1"
          },
          {
            "name": "wasmUltraHonkVerifierWasmMemory",
            "value": "2249.31",
            "unit": "MiB/iter",
            "extra": "iterations: undefined\ncpu: undefined MiB\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "47148561+Maddiaa0@users.noreply.github.com",
            "name": "Maddiaa",
            "username": "Maddiaa0"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8f121f8355e84a31ca08a56a829f8c545f058ff7",
          "message": "chore(p2p): run testbench with 200kb transactions (#12218)\n\n## Overview\n\nBumps transactions size use random ClientIVC proofs in testbench \n\n```\nconst CLIENT_IVC_PROOF_LENGTH = 172052;\nconst CLIENT_IVC_VK_LENGTH = 2730;\n```",
          "timestamp": "2025-02-24T15:19:11Z",
          "tree_id": "8de9e7028424ad42c564f1feb594d50c62bc4fa6",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/8f121f8355e84a31ca08a56a829f8c545f058ff7"
        },
        "date": 1740412089928,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18346.567696000195,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16206.130508999997 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18823.241184999915,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16401.564675999998 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 4030.936354000005,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3235.078521 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 54960.043689000006,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 54960044000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 10310.284687000001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10310287000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1829711230,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1829711230 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 130552186,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 130552186 ns\nthreads: 1"
          },
          {
            "name": "wasmUltraHonkVerifierWasmMemory",
            "value": "2249.31",
            "unit": "MiB/iter",
            "extra": "iterations: undefined\ncpu: undefined MiB\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gregojquiros@gmail.com",
            "name": "Gregorio Juliana",
            "username": "Thunkar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4bd5678f840694333725aed44e00ced576ef9950",
          "message": "chore: @aztec/stdlib pt.5 -> started circuit-types minification (#12232)\n\nInitial cleanup of `circuit-types`. Attempted to do more in one go, but\nthe trees were pretty much all over the place.",
          "timestamp": "2025-02-24T17:24:46+01:00",
          "tree_id": "7ec7da89509a7e6936083fe1932136b10a2128b1",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/4bd5678f840694333725aed44e00ced576ef9950"
        },
        "date": 1740416151262,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18341.654283000025,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16176.527652 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18830.065332000006,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16320.225928 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 3961.3667069997973,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3148.826145 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 54966.396415,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 54966397000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 10471.9078,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10471919000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1829405466,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1829405466 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 132137704,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 132137704 ns\nthreads: 1"
          },
          {
            "name": "wasmUltraHonkVerifierWasmMemory",
            "value": "2249.31",
            "unit": "MiB/iter",
            "extra": "iterations: undefined\ncpu: undefined MiB\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "47148561+Maddiaa0@users.noreply.github.com",
            "name": "Maddiaa",
            "username": "Maddiaa0"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b2b5589cacc926fcb7a6a5ec1dbc5fdf023b65cc",
          "message": "chore(p2p): remove debug disable message validators  (#12237)",
          "timestamp": "2025-02-25T10:52:20Z",
          "tree_id": "a05b0337153e74e34666a9600b5824be62ae3489",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/b2b5589cacc926fcb7a6a5ec1dbc5fdf023b65cc"
        },
        "date": 1740482483726,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18244.805316999875,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16154.350743000003 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18755.36757200007,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16342.291262 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 3983.2226109997464,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3258.984435 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 55100.247589,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 55100249000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 10526.288085999999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10526291000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1830173203,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1830173203 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 125791435,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 125791435 ns\nthreads: 1"
          },
          {
            "name": "wasmUltraHonkVerifierWasmMemory",
            "value": "2249.31",
            "unit": "MiB/iter",
            "extra": "iterations: undefined\ncpu: undefined MiB\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "karl.lye@gmail.com",
            "name": "Charlie Lye",
            "username": "charlielye"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d94bc3d56b7d516ca7cf99df21c21edd556710d",
          "message": "feat: compress/decompress redis logs (#12243)\n\nShould save quite a bit of space, hopefully giving the data a longer\nlifetime before eviction.\nHandles both compressed and uncompressed logs.",
          "timestamp": "2025-02-25T12:07:42Z",
          "tree_id": "7d24a70d8afb07bdd4c1fee60f1156fcb160c4d2",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/4d94bc3d56b7d516ca7cf99df21c21edd556710d"
        },
        "date": 1740486194877,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18188.725105000005,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16135.782790000001 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18618.33660399998,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16409.065652 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 3859.389539999995,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3077.774431 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 54737.52495199999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 54737525000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 11353.529429,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 11353535000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1814794670,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1814794670 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 131235394,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 131235394 ns\nthreads: 1"
          },
          {
            "name": "wasmUltraHonkVerifierWasmMemory",
            "value": "2249.31",
            "unit": "MiB/iter",
            "extra": "iterations: undefined\ncpu: undefined MiB\nthreads: undefined"
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
          "id": "9139ffb905d2ac9740121b6ef249607ca3302e1d",
          "message": "fix: Node getBlockHeader returns undefined for non-existent blocks (#12242)\n\nAztec node's `getBlockHeader` returned the initial genesis header when\nqueried for a non-existing block.",
          "timestamp": "2025-02-25T09:10:26-03:00",
          "tree_id": "386f4e50b530145dcdc966122850987cd68fa786",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/9139ffb905d2ac9740121b6ef249607ca3302e1d"
        },
        "date": 1740487183559,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18227.17163399989,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16144.696984 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18741.780255000092,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16320.769129999999 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 3941.120327999897,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3188.058156 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 54876.14524699999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 54876145000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 10307.052516000002,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10307055000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1832997861,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1832997861 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 134469195,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 134469195 ns\nthreads: 1"
          },
          {
            "name": "wasmUltraHonkVerifierWasmMemory",
            "value": "2249.31",
            "unit": "MiB/iter",
            "extra": "iterations: undefined\ncpu: undefined MiB\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "karl.lye@gmail.com",
            "name": "Charlie Lye",
            "username": "charlielye"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1a34cdf8c456533cdc7a3e3bf59e396a5e139f0e",
          "message": "feat: Cl/ci3.4 (#12018)\n\n* Introduces \"skipped\" test log so you can see a list of all skipped\ntests, with log links to their successful run.\n* Test logs have metadata added in the header (command, commit link, env\nvars, date).\n* CI docs around approach to reproducing flakes.\n* Denoise logs can now be \"live tailed\" with `ci llog <id>`.\n* Logs for local (non CI) runs expire within 8 hours. CI logs retained\nfor 14 days.\n* Denoise logs use a temp file rather than ephermeral file descriptor,\nwhich I'm moon-shot hoping will fix the \"hanging CI machine after\nfailure\" issue (existing code never closed the fd).\n* Only put anvil in release-image rather than all of foundry (slight\nimage space save).\n* Make the p2p e2e tests \"grindable\" by using unique data dirs.",
          "timestamp": "2025-02-25T15:14:53Z",
          "tree_id": "829b3b41216372fff7c0a32050a837d600237bb0",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/1a34cdf8c456533cdc7a3e3bf59e396a5e139f0e"
        },
        "date": 1740498304299,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18307.49617299989,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16145.352753999998 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18832.08790999993,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16291.062576000002 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 4003.163303000065,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3188.78763 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 55098.13765,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 55098139000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 11267.503283,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 11267513000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1834150075,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1834150075 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 131077952,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 131077952 ns\nthreads: 1"
          },
          {
            "name": "wasmUltraHonkVerifierWasmMemory",
            "value": "2249.31",
            "unit": "MiB/iter",
            "extra": "iterations: undefined\ncpu: undefined MiB\nthreads: undefined"
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
          "id": "63081a4f7279a29d020c78cd15635ae618d771d3",
          "message": "refactor!: note interfaces (#12106)",
          "timestamp": "2025-02-26T00:17:59Z",
          "tree_id": "9ec1278af6e17a7d3319a1cc2fd3a8349438425b",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/63081a4f7279a29d020c78cd15635ae618d771d3"
        },
        "date": 1740530786376,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18137.63883699994,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16034.22133 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18634.687618999807,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16426.715566000003 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 3879.2754920000334,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3112.53043 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 54772.620625,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 54772619000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 11097.105875000001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 11097113000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1835302529,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1835302529 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 129756027,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 129756027 ns\nthreads: 1"
          },
          {
            "name": "wasmUltraHonkVerifierWasmMemory",
            "value": "2249.31",
            "unit": "MiB/iter",
            "extra": "iterations: undefined\ncpu: undefined MiB\nthreads: undefined"
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
          "id": "83214fcb0bacb0c596b17c321ea99a280ad2147a",
          "message": "fix: Enforce no import side effects (#12268)\n\nSince we enabled `verbatimModuleSyntax` in yarn project, all imports of\nthe like `import { type Foo } from './foo.js'` now cause `foo.js` to be\nactually imported in runtime. To prevent this, the `type` modifier needs\nto be moved out of the braces. This is what this eslint rule does.\n\nSee [this\npost](https://typescript-eslint.io/blog/consistent-type-imports-and-exports-why-and-how/#verbatim-module-syntax)\nfor more info.",
          "timestamp": "2025-02-26T01:06:57Z",
          "tree_id": "5f14cd84c456dfa7ab82b431eecca9e83333a1bc",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/83214fcb0bacb0c596b17c321ea99a280ad2147a"
        },
        "date": 1740533916668,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18406.723074999943,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16312.480667999998 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18745.517887000005,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16242.10115 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 4007.2359159998996,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3197.482536 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 54821.97465,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 54821973000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 9750.016864000001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 9750021000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1829858510,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1829858510 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 127134591,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 127134591 ns\nthreads: 1"
          },
          {
            "name": "wasmUltraHonkVerifierWasmMemory",
            "value": "2249.31",
            "unit": "MiB/iter",
            "extra": "iterations: undefined\ncpu: undefined MiB\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gregojquiros@gmail.com",
            "name": "Gregorio Juliana",
            "username": "Thunkar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9ccd2c9cb9a1a932dd22eae16c64288cc0ff24af",
          "message": "chore: cleanup stdlib internal imports (#12274)\n\nThanks @sklppy88 for the heads up!",
          "timestamp": "2025-02-26T07:47:21+01:00",
          "tree_id": "accb17e2f13fe1e3e3844cde294cb2db0dc7e737",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/9ccd2c9cb9a1a932dd22eae16c64288cc0ff24af"
        },
        "date": 1740554525796,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18131.968670000104,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16054.204241999998 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18471.453201999793,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16280.352329 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 3920.152401999985,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3088.2025790000002 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 54514.999772,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 54515000000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 9349.240704,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 9349247000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1804206471,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1804206471 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 127990200,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 127990200 ns\nthreads: 1"
          },
          {
            "name": "wasmUltraHonkVerifierWasmMemory",
            "value": "2249.31",
            "unit": "MiB/iter",
            "extra": "iterations: undefined\ncpu: undefined MiB\nthreads: undefined"
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
          "id": "7c3eed09c11e59006cc7f6b80693264f32819420",
          "message": "feat: metrics (#12256)\n\nMore metrics fixes",
          "timestamp": "2025-02-26T08:52:52Z",
          "tree_id": "ed840dbb33f973f75f40d74af319408721fd268f",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/7c3eed09c11e59006cc7f6b80693264f32819420"
        },
        "date": 1740561666874,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18392.53748400006,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16172.457123 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18783.985854000093,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16503.364765000002 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 4040.4455880000114,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3201.9833530000005 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 55657.778836,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 55657779000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 9407.328069,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 9407332000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1829998567,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1829998567 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 134477984,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 134477984 ns\nthreads: 1"
          },
          {
            "name": "wasmUltraHonkVerifierWasmMemory",
            "value": "2249.31",
            "unit": "MiB/iter",
            "extra": "iterations: undefined\ncpu: undefined MiB\nthreads: undefined"
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
          "id": "f887efc9c47a643e6eba4aaabafdeef46c77ff4a",
          "message": "fix: prometheus scrapes itself in the cluster (#12277)",
          "timestamp": "2025-02-26T09:29:17Z",
          "tree_id": "074d8fd895c0e70cbc13d3444349b8d9d40735ae",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/f887efc9c47a643e6eba4aaabafdeef46c77ff4a"
        },
        "date": 1740563532851,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18580.484788000147,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16456.434877 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18812.58359000003,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16570.961467 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 3987.7334349996545,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3142.2164980000002 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 54997.383904,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 54997371000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 10217.298942,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10217307000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1821695315,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1821695315 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 136152104,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 136152104 ns\nthreads: 1"
          },
          {
            "name": "wasmUltraHonkVerifierWasmMemory",
            "value": "2249.31",
            "unit": "MiB/iter",
            "extra": "iterations: undefined\ncpu: undefined MiB\nthreads: undefined"
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
          "id": "5da66c833f25fcd72b611f6de75e2040554bc475",
          "message": "refactor: proving cost in fee header (#12048)",
          "timestamp": "2025-02-26T10:39:37Z",
          "tree_id": "955f02b4219c5376e8d9deaa2c40e94694e0fc84",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/5da66c833f25fcd72b611f6de75e2040554bc475"
        },
        "date": 1740567930890,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18421.864129999904,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16258.578279000001 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18708.696600000167,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16380.526998000001 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 4000.644589000103,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3173.4500530000005 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 55027.79324100001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 55027794000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 11103.012053,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 11103017000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1828765238,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1828765238 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 132123741,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 132123741 ns\nthreads: 1"
          },
          {
            "name": "wasmUltraHonkVerifierWasmMemory",
            "value": "2249.31",
            "unit": "MiB/iter",
            "extra": "iterations: undefined\ncpu: undefined MiB\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "james.zaki@proton.me",
            "name": "James Zaki",
            "username": "jzaki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5d49445812dca3405805d92c9236f90236b3ce98",
          "message": "docs: Fees doc snippets and code snippets (#12229)",
          "timestamp": "2025-02-26T11:06:12Z",
          "tree_id": "a78a223ab01d242e5530be89da7f384b70ea9e5e",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/5d49445812dca3405805d92c9236f90236b3ce98"
        },
        "date": 1740569721187,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18231.541997000022,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 15980.735325 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18726.657449999948,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16336.34813 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 3967.7975150002567,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3163.96359 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 54884.056704,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 54884056000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 11671.069705999998,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 11671075000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1811684462,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1811684462 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 130761695,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 130761695 ns\nthreads: 1"
          },
          {
            "name": "wasmUltraHonkVerifierWasmMemory",
            "value": "2249.31",
            "unit": "MiB/iter",
            "extra": "iterations: undefined\ncpu: undefined MiB\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "47148561+Maddiaa0@users.noreply.github.com",
            "name": "Maddiaa",
            "username": "Maddiaa0"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a20da9b93ea76b9a02fc8447303a833b173578b9",
          "message": "fix: darwin build (#12290)\n\nCo-authored-by: IlyasRidhuan <ilyasridhuan@gmail.com>",
          "timestamp": "2025-02-26T17:11:31Z",
          "tree_id": "45bb4b1107e6c6ba6444bc0e6b88d301ecec7ec7",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/a20da9b93ea76b9a02fc8447303a833b173578b9"
        },
        "date": 1740592262671,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 17923.031965000064,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 15952.024304000002 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18462.81610699998,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16546.379267 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 3973.1337240000357,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3088.3861999999995 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 54191.02463199999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 54191025000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 10698.594458,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10698598000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1803999724,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1803999724 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 123847077,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 123847077 ns\nthreads: 1"
          },
          {
            "name": "wasmUltraHonkVerifierWasmMemory",
            "value": "2249.31",
            "unit": "MiB/iter",
            "extra": "iterations: undefined\ncpu: undefined MiB\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "karl.lye@gmail.com",
            "name": "Charlie Lye",
            "username": "charlielye"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b0de9e8d58f93d149e59cf3ca7ac81bf51b68e12",
          "message": "feat: live logs (#12271)\n\nWe publish denoise logs to redis every 5s.",
          "timestamp": "2025-02-26T17:32:49Z",
          "tree_id": "4e4ecc8d6dbbc9539362f73b950127d701ca93b7",
          "url": "https://github.com/AztecProtocol/aztec-packages/commit/b0de9e8d58f93d149e59cf3ca7ac81bf51b68e12"
        },
        "date": 1740592698489,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "nativeClientIVCBench/Ambient_17_in_20/6",
            "value": 18418.52892399993,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16229.577579 ms\nthreads: 1"
          },
          {
            "name": "nativeClientIVCBench/Full/6",
            "value": 18635.477901000057,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 16248.441368999998 ms\nthreads: 1"
          },
          {
            "name": "nativeconstruct_proof_ultrahonk_power_of_2/20",
            "value": 3982.4811020002926,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3232.588258 ms\nthreads: 1"
          },
          {
            "name": "wasmClientIVCBench/Full/6",
            "value": 55006.305841,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 55006305000 ms\nthreads: 1"
          },
          {
            "name": "wasmconstruct_proof_ultrahonk_power_of_2/20",
            "value": 11129.494998,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 11129504000 ms\nthreads: 1"
          },
          {
            "name": "commit(t)",
            "value": 1823158390,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1823158390 ns\nthreads: 1"
          },
          {
            "name": "Goblin::merge(t)",
            "value": 134841210,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 134841210 ns\nthreads: 1"
          },
          {
            "name": "wasmUltraHonkVerifierWasmMemory",
            "value": "2249.31",
            "unit": "MiB/iter",
            "extra": "iterations: undefined\ncpu: undefined MiB\nthreads: undefined"
          }
        ]
      }
    ],
    "P2P Testbench": [
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
          "id": "912f2c539bcf382e28df4afa0fc44fec89f3cd85",
          "message": "feat(p2p): gossipsub scoring adjustments + testbench",
          "timestamp": "2025-02-23T02:27:21Z",
          "url": "https://github.com/AztecProtocol/aztec-packages/pull/12075/commits/912f2c539bcf382e28df4afa0fc44fec89f3cd85"
        },
        "date": 1740346403428,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "degree-1-strict - numberReceived",
            "value": 3,
            "unit": "ma"
          },
          {
            "name": "degree-1-strict - minDelay",
            "value": 383,
            "unit": "ma"
          },
          {
            "name": "degree-1-strict - maxDelay",
            "value": 5276,
            "unit": "ma"
          },
          {
            "name": "degree-1-strict - averageDelay",
            "value": 2716.33,
            "unit": "ma"
          },
          {
            "name": "degree-1-strict - medianDelay",
            "value": 2490,
            "unit": "ma"
          },
          {
            "name": "normal-degree-50-nodes - numberReceived",
            "value": 26,
            "unit": "ma"
          },
          {
            "name": "normal-degree-50-nodes - minDelay",
            "value": 50,
            "unit": "ma"
          },
          {
            "name": "normal-degree-50-nodes - maxDelay",
            "value": 7221,
            "unit": "ma"
          },
          {
            "name": "normal-degree-50-nodes - averageDelay",
            "value": 2146.35,
            "unit": "ma"
          },
          {
            "name": "normal-degree-50-nodes - medianDelay",
            "value": 925,
            "unit": "ma"
          }
        ]
      }
    ]
  }
}