# Hi-Load Servers (WARP-mode)

To improve the efficiency of production servers under heavy loads—such as remote nodes for mobile wallets—we have implemented a special daemon mode called **WARP-mode**(derived from “full warm up”). This mode requires at least 64GB of physical RAM, but it can deliver up to a x20 performance boost compared to the standard mode.

To use WARP-mode, make sure your server has at least 64 GB of physical RAM.

To enable WARP-mode launch daemon with this command line option:

```bash
zanod --do-warp-mode

2025-Mar-13 13:51:18.787912 Zano v2.1.0.382[926549e]
2025-Mar-13 13:51:18.793423 Starting...
2025-Mar-13 13:51:18.794923 Module folder: C:\Users\roky\home\projects\zano_UI_x64\build\src\Release\zanod.exe
2025-Mar-13 13:51:18.806597 Pre-downloading not needed (db file size = 12569350144)
2025-Mar-13 13:51:18.808596 Initializing p2p server...
......
2025-Mar-13 13:51:19.042870 Core initialized OK
2025-Mar-13 13:51:19.044871 Initializing full warp-mode
2025-Mar-13 13:51:19.045871 Using db items cache size(L2): 38.91 M items
2025-Mar-13 13:51:19.049737 [Warp]: Setting up db cache to 38.91 M items.....
2025-Mar-13 13:51:19.051743 [Warp]: Detected only 53.99 GB RAM, might be not optimal, recommended above 64.00 GB
2025-Mar-13 13:51:19.053738 [Warp]: Launching warm up....
2025-Mar-13 13:51:19.055737 Warming up starting, total blocks...3064647
2025-Mar-13 13:51:19.059450 Warming up: 0%, 1 of 3064647
2025-Mar-13 13:51:52.573744 Warming up: 0%, 28812 of 3064647
2025-Mar-13 13:51:54.604781 Warming up: 1%, 30979 of 3064647
2025-Mar-13 13:52:19.995541 Warming up: 1%, 61177 of 3064647
.....
2025-Mar-13 13:52:19.995541 [Warp]: Warm up finished!
```

This command line option reconfigure core cache paprameters and then "warm up" all data stored in databse into cache(which might take some time - up to 10 minutes), and after that the server would start handling network reaquests(RPC and P2P).

### Technical Note

From a technical standpoint, the getblocks.bin RPC request essential for wallet synchronization and one of the most time-consuming operations must load each of roughly 4,000 blocks from the database and then deserialize them into C++ structures. The same process is repeated for every transaction within each block. To alleviate this load, Zano introduced a special caching mechanism about seven years ago. Each database table has its own cache, which by default can hold around 10,000 items. This lets the daemon quickly carry out tasks needed for fast block validation (for example, calculating various block medians or recalculating the next difficulty).

To further enhance performance in production, we decided to fully leverage this cache by setting its size larger than the entire storage. This ensures that all blocks and transactions remain “hot” loaded and deserialized at all times. Currently, with over three million blocks, a fully loaded database is about 35GB. We expect this size to grow, though wallet requests typically focus on more recent blocks. Even if, in the future, the loaded database exceeds the amount of physical RAM, WARP-mode will still be significantly more efficient because any swapping is efficiently handled at the operating system level, and there is no additional deserialization phase.
