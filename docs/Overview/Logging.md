# Logging Requirements

All interfaces will be implemented to work with a configurable logging library. The logging library should have methods that allow log items to be generated. Each logging call will associate the log item with a logging level (error, warning, info, debug, trace). The configuration of the logging library should determine where the log items are sent ( local file, logging service, standard output, database, …) and the minimum level of message that will be send to each output destination.

All implementations of the SDK’s public methods should generate trace level (debug if trace is not supported) log message to indicate entry or exit from the method. All external interactions (calls to the blockchain, calls to Genus, updates of the wallet, …) must be logged.