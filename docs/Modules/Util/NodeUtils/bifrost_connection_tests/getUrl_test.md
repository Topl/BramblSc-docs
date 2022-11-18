# BifrostConnection.getUrl Tests

The following testing scenarios are required:

##### Happy Path

* **Given** There exists an object that implements this interface and it is configured with the URL of the Bifrost node
            it will connect with
* **When**
    ```
    getUrl()
    ```
* **Then** the call returns the configured URL as a string
