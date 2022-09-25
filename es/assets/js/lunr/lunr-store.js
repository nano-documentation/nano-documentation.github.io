var store = [{
        "title": "Argumentos de la línea de comandos de Nanominer [2022]",
        "excerpt":"You can use this list as a reference for all Launch Parameters supported by Nanominer.    Puede descargar Nanominer 3.7.2 desde aquí:   Download Now   Download (mirror)   Linux:  En Linux, debe reemplazar Nanominer.exe con ./Nanominer en los ejemplos de línea de comandos a continuación.   Cómo utilizar   Para iniciar Ethash, ingrese en el archivo .ini:   [Ethash] wallet=0x123... coin=ETH   Complete su dirección ETH en la línea “billetera criptográfica” y esto es lo suficientemente insignificante como para comenzar a extraer Ethereum con Nanominer en Nanopool.   La forma más fácil de obtener una billetera es registrarse en un intercambio de criptomonedas como Binance o Huobi.   The next steps are not necessary but if you have more than one RIG, it would be much more convenient if you set a different name for each so that you’ll be able to track them on the pool individually.   You are also advised to set your email address in if you want to receive alerts form the pool when your worker (RIG) goes offline. You email will also be your password to access the settings. If you don’t want to receive the alerts, you can use a passphrase instead. As it’s not mandatory, feel free to jump down to the next step.      Add rigName = line under the wallet to indicate your RIG name   Add email = line to indicate your email/passphrase   NOTE: Nanominer will connect to the pool’s default server, and It might be not the best choice for you as there’s latency and you want the server you connect to to be as closer to your location as possible. Therefore, by adding the follower parameter at the bottom of your Nanominer’s config.ini file:   sortPools=true this will enable automatic pool’s servers sorting based on their ping speed   You can be sure that Nanominer will automatically pick the server that has the lowest ping time from your location and the network latency will not affect your mining as the pool and the miner will communicate at the highest speed possible. Full Configuration Example:   [Ethash] wallet=0x52bc44d5378309ee2abf1539bf71de1b7d7be3b5 coin=ETH rigName=Rig001 email=example@email.com sortPools=true   Start the Miner   Start the miner by running the nanominer.exe file. Nanominer will start, run the commands to set those environment variables, initialize each of your GPU’s, build the DAG file on each of your GPU’s and start hashing away. After a while, you’ll be able to find your account on the pool.   Find your Account on Nanopool   Remember there’s no registration on the pool. You just need to start mining and your account will automatically show up. However, allow some time as our system needs about 30 minutes to add your account to the pool’s database since your miner submitted its first share. So please, be patient and come back to Nanopool in a while, there’s Address  filed on the right top in which you need to fill your Ethereum address in. Once filled, hit enter, you’ll be redirected to your Nanopool account page.   Congrats! You have joined Nanopool. Spend some time to familiarize yourself with the pool and its features; you’ll like the interface.   Customize Nanominer for maximum profit! Read the full guide to configuring Nanominer   How to disable GPU   If you do not want to launch the miner on all available GPUs but only on some of them, their numbers can be provided in the devices parameter separated by a comma or space. nanominer numbers the GPUs starting from zero in ascending order of their PCI addresses. You can see a list of available GPUs and the order in which they’re in by launching nanominer with the -d command line option:   nanominer -d   For example, if there are four GPUs in the system (0, 1, 2, 3) and all but the second-to-last one (indexed as 2) must be set to mine, then the devices option must be set in the following manner:   devices=0,1,3   The order of devices determines the order of displayed hashrate. For example, if it is set as:   devices=3,1,0   Then the hashrate line will first display GPU3, then GPU1 and finally GPU0.   Example of configuration file for mining Ethereum, Monero, Ubiq and PascalCoin on same 8 GPUs rig using separate devices:   rigName = rig1 [Ethash] wallet = 0xada842613541e55e2500478892a334cde74ff653 devices = 0,1 [Etchash] wallet = 0xada842613541e55e2500478892a334cde74ff653 devices = 5 [Ubqhash] wallet = 0x1111111111111111111111111111111111111111 pool1 = ubiq-eu.maxhash.org:8008 devices = 2,3,4,6,7 [RandomX] wallet=84XFxjQVYoJjQBeyfbcYBgJ1tw4cgywGyTp12nQw3mSKZctgMYuPGRH1y2LuBAS8yyT8ZX2NDS3CXbfFAxdXQJwAGMoMDSq  ","categories": ["documentation"],
        "tags": ["Nanominer"],
        "url": "https://nanominer.info/documentation/setup/",
        "teaser": "https://nanominer.info/assets/images/thumbs/500x300.png"
      },]
