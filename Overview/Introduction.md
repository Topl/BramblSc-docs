# Introduction

Applications interact with the Topl blockchain using an implementation of the Topl SDK (software development kit). The Topl SDK is to be implemented in multiple programming languages.  

This guide is for implementers of the SDK. It specifies how to implement the SDK. 

This is the intended structure of the SDK:

![SDK Structure](http://www.plantuml.com/plantuml/png/RP2nheCm34NtV8N5c_a7XgSkZ1tR3Wwu4662b9WYXFhlTICKjQZhoSczLwwYO91vPEEdbg0u_zS5_B7hUbc9ULfWCm3E2uKxDYfqvETuzPaKW14I_FOiJytGzEZyKKulAbzimD7oRQ_h0f5_umMPIOuuLK1Pvc_AKfAo7oZ7V2Og7cXzuCnYdiQqA6WnwjXwft1od4Pc3pOrA_AjdkW5)

There are two main interfaces for the SDK. The blockchain interface is used to submit transactions to the blockchain and query the status of the blockchain network. The genus interface is used to query the contents of the blockchain. These interfaces are build on top of two lower level libraries:

* The brambl library manages the details of creating request messages and sending them to the blockchain network.

* The wallet library manages the many keys and other information that are needed to sign valid blockchain transactions. It keeps this information in a keyvault file.

The keyvault file will be some kind of key-value store. The specific key-value store depends on the environment. If the application is a stand-alone application, the keyvault file will be a directory that is managed by LevelDB. If the application is inside of a web browser, the details of the keyvault file will depend on the browser's implementation of the IndexDB module.  For Chrome, it is LevelDB.

The purpose of the blockchain API is to facilitate interactions between the Topl blockchain and applications. The following activity diagram shows the pattern that a typical interaction will follow:

![SDK Process](https://www.plantuml.com/plantuml/png/RLAzRjmm3Dxr50IwjAzmj-JI8UXIj420BbracRQ5aobLf78Du8SlPS66ZMQwCt--7tryOh5PoXpCyYdPW6D6fCKkjvI2TrPy9BEEcCipZfx0HMB9nQsTE81aIpnWRd_iMh-Q8UQxkRoW0E5VWKA5iGVRzncPpP3Z30yRWlObWlP05qoX3IpNOMOKRb1WH-j99Tv8_9-2loOlkBoWmYxcyhDWVeVr2vv3T7StwJJSVdoho-2Auf5ix9-Hlq0STdmrQv3wflZhvaubfnpVa4w-cYLEEkzf19r8aNrjmS7JRrBiwBmLjV7mCcqI6kSc1Fbw95GmLLMu0hCVgVxUyVq8V9x_I5wNe-sTPVa_ZlCxQGLaGkFYd1GP-zF2-T637oVfGi7bDQO0tr4Usbwgc7ds9oeJ2Rej0iNPCsgilMUdgZDNxZPePB9IhqfqeTNFbbxF5UXGDIF3csVV1JIUrgL6SDsZhB5U3bSC9VLMaBUxMtFPapWU14jCvabnoXp-0G00)

The structure of this specification follows the SDK structure.




