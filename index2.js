const express = require('express');
const app = express();
const { exec } = require('child_process');
const gethAttach = exec(`geth attach http://testnet2.matic.network`);
const unlockAccount = exec(`personal.unlockAccount("0xf3523b22467eb378eb1f4ba6b3322f88caa593d5", "", null)`);
require('events').EventEmitter.defaultMaxListeners = 10

const port = 1244;

app.listen(port, function () {
    console.log("Starting..."); 

    setInterval(() => {
        gethAttach.stdout.on('data', (data)=>{
            console.log(data); 
            
            unlockAccount.stdout.on('data', (data)=>{
                console.log("Hey")
                console.log(data);
            });
            unlockAccount.stderr.on('data', (data)=>{
                console.log("Error")
                console.error(data);
            });
        });   
    }, 1000);

    // gethAttach.stderr.on('data', (data)=>{
    //     // console.log("Error2")
    //     console.error(data);
    // });

    // exec(`geth attach http://testnet2.matic.network`, (error, stdout, stderr) => {
    //     console.log("Should NOT get printed multiple times"); 
    //     if (error) {
    //       console.error(`exec error: ${error}`);
    //       return;
    //     }
    //     console.log("Started..."); 
    //     setTimeout(async () => {
    //         console.log("Should Really get printed multiple times");
    //         // myShellScript.stdout.on('data', (data)=>{
    //         //     console.log(data); 
    //         //     // do whatever you want here with data
    //         // });
    //         // myShellScript.stderr.on('error', (data)=>{
    //         //     console.error(data);
    //         // });
    //     }, 1000);  // HARDCODED TIME
        
    // });
    console.log("Server is running " + port);
});
