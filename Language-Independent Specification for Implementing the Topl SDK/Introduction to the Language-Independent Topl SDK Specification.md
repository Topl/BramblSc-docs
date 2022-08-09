Applications interact with the Topl blockchain using an implementation of the Topl SDK (software development kit). The Topl SDK is to be implemented in multiple programming languages.  

This guide is for implementers of the SDK. It specifies how to implement the SDK. 

This is the intended structure of the SDK:

![SDK Structure](////www.plantuml.com/plantuml/png/RP2nheCm34NtV8N5c_a7XgSkZ1tR3Wwu4662b9WYXFhlTICKjQZhoSczLwwYO91vPEEdbg0u_zS5_B7hUbc9ULfWCm3E2uKxDYfqvETuzPaKW14I_FOiJytGzEZyKKulAbzimD7oRQ_h0f5_umMPIOuuLK1Pvc_AKfAo7oZ7V2Og7cXzuCnYdiQqA6WnwjXwft1od4Pc3pOrA_AjdkW5)

There are two main interfaces for the SDK. The blockchain interface is used to submit transactions to the blockchain and query the status of the blockchain network. The genus interface is used to query the contents of the blockchain. These interfaces are build on top of two lower level libraries:

* The brambl library manages the details of creating request messages and sending them to the blockchain network.

* The wallet library manages the many keys and other information that are needed to sign valid blockchain transactions. It keeps this information in a keyvault file.

The keyvault file will be some kind of key-value store. The specific key-value store depends on the environment. If the application is a stand-alone application, the keyvault file will be a directory that is managed by LevelDB. If the application is inside of a web browser, the details of the keyvault file will depend on the browser's implementation of the IndexDB module.  For Chrome, it is LevelDB.

The structure of this specification follow the SDK structure.