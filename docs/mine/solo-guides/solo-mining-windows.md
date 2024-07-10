# Solo Mining Guide

The Zano daemon features an internal stratum-like server that can serve miner clients via the ethProxy protocol. It works like a very light and simple pool that mines to a single address.

:::caution Requirements

A 2GB graphic card is required for GPU mining.

:::

## Windows quick guide

### Step 1: Set up the Zano node

- First, install the Zano app, open the wallet, and wait until blockchain syncing is complete, when the syncing process is complete, close the app.

<!---->

- Locate where your Zano node executable (`zanod.exe`) is.

  By default, it's in `C:\Program Files\Zano`

### Step 2: Download and Configure TT-Miner

- &#x20;Go to the [TT-Miner GitHub page ](https://github.com/TrailingStop/TT-Miner-release/releases/tag/2024.2.0)and download the latest .ZIP file, extract it to a folder on your computer.

<!---->

- &#x20;In the extracted folder, create a text file named `start-zano-mining`&#x20;

- Paste the following content inside:

  ```
  rem starts zano with the stratum server activated
  start "" "C:\Program Files\Zano\zanod.exe" --stratum --stratum-miner-address=<YOUR_WALLET_ADDRESS> --stratum-bind-port=11555

  rem TT commandline
  start TT-Miner.exe -luck -c ZANO -P miner@127.0.0.1:11555
  pause
  ```

- Replace `<YOUR_WALLET_ADDRESS>` with your actual Zano wallet address.

- If your installation is not in the default location, replace `C:\Program Files\Zano` with the correct path.

- Once you finish editing, if using Notepad, select `file` option, then `save as`, an add a `.bat` to the end of your file name (`start-zano-mining.bat`), this will make it executable.

### Step 3: Start Mining

- Double-click `start-zano-mining.bat` to run TT-Miner & Zano node, verify that it's working as intended.

:::info

If your `zanod.exe` instance fails to start, make sure that there isn't another one running, and close your Zano desktop wallet if you haven't done so already.

:::

### Step 4 (Optional): Start miner on boot

- Search `Run` on your Windows search bar and hit enter.

- Paste the following command into the text field, and hit enter.

  ```
  shell:startup
  ```

  The `Startup` folder will be opened

- Go back to your TT-miner folder, right-click `start-zano-mining.bat` and select Create Shortcut

- Copy the new shortcut to the previous `Startup` folder, now the script will be executed whenever your PC starts.

:::info

Remember that to open your Zano desktop wallet, you must first close all zanod.exe instances.

:::

Visit our Mining-Talk channels on our [Discord and Telegram](https://links.zano.org) if you need more assistance or want to discuss, happy mining!
