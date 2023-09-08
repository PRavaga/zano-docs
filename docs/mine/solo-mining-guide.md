# Solo Mining Guide

The Zano daemon features an internal stratum-like server that can serve miner clients via the ethProxy protocol. It works like a very light and simple pool that mines to a single address.

:::caution Requirements

2GB graphic card is required for GPU mining

:::

To run a GPU miner with the internal Zano stratum server follow these steps:

- build the daemon (zanod executable)
- run the daemon with an activated stratum server
- run the GPU or CPU miner connected to the daemon

Once all started the miner should connect to the daemon and receive a job from it. Upon finding a solution, the miner should send it to the daemon and the daemon should confirm the solution. Both can run on remote machines.

### Windows quick guide

First, install the Zano app, a wallet and wait until blockchain syncing is complete. When syncing is complete close the app.

In order to mine, Zano must be started with the stratum server activated. Open a `cmd` console window and navigate to the Zano folder (`C:\Program Files\Zano by default`):

```text
cd C:\Program Files\Zano
```

Then

```
zanod.exe --stratum --stratum-miner-address=<YOUR WALLET ADDRESS> --log-level=0 --stratum-bind-port=11555
```

Get the latest [mining software](overview) for Windows. To make it simple, if you use an Nvidia graphic card choose Cuda miner, for AMD go for OpenCL.

:::info Nvidia/CUDA cards

If you have an NVIDIA card you need to install CUDA GPU Computing Toolkit v10.1 and then add `C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v10.1\bin` to your `Path` environment variable.

:::

Open another `cmd` window and navigate to the progminer folder. Run one of the following commands to start mining.

```
progminer-zano-opencl.exe -P stratum1+tcp://miner@localhost:11555

progminer-zano-cuda.exe -P stratum1+tcp://miner@localhost:11555

progminer-zano-cpu.exe -P stratum1+tcp://miner@localhost:11555
```

You can use many instances of running mining software (`progminer-zano-*.exe`) with only one instance of the Zano daemon (`zanod`).
