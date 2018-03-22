# lambda-fibonacci
# About
Fibonacci as a Service (FaaS) using Node.js/Amazon Lambda.

Demonstration of Fibonacci as a Service. Input is a POST request
with any valid Fibonacci number as the body of the request and output
will be the next Fibonacci number in sequence.

**Valid Input**

* Input must be an integer

* Input must be in the range [1, ...]. This is because there are multiple
instances of '1' at the beginning of the Fibonacci sequence.

* Input must be an existing, valid, Fibonacci number.

**Live Demo and Usage**

The easiest way to test Fibonacci as a Service is with the ```curl``` command. A live demo is available which you can test with:
```
curl --data "5" https://6nqth5lq9e.execute-api.us-east-2.amazonaws.com/faasDeploy/faas
```
Replace ```5``` with any input to test. You can also use any POST-capable technology, such as calling the service from a script or web page.


# Setup


**Lambda Setup**

You will need to have an Amazon AWS account to use Lambda (https://aws.amazon.com/lambda/)

* Sign into your Amazon ```AWS Management Console```. From ```Services```, select ```Lambda```. Select ```Create Function```

* From the screen above, select ```Author from scratch```.

*Input any name for your Fibonacci Service*
* Runtime will be ```Node.js 6.10```
* For role, select ```Create new role from template```.

*Input any name for your new role*
* For Policy Templates, select ```Simple Microservice permissions```

* Now select ```Create Function```. This will setup a new Lambda function for our service

**Code Setup**

You will now be automatically redirected to the new Lambda function.

* Download ```lambda-fibonacci.zip``` from this page
* In the window for your new Lambda function, find the drop down menu that says ```Edit code inline``` and change it to ```Upload a .ZIP file```
* Upload ```lambda-fibonacci.zip``` which was downloaded earlier, and select ```Save```

**API Setup**

* Once you have uploaded the code from the previous setup, find ```API Gateway``` above the code editor and select this option
* From the API section, select ```Create a new API``` from the drop down menu

*Input any name for API and Deployment Stage*
* For security, select ```Open```. (This can be changed/modified for more security later on)
* Once finished, ```Add``` your new API and ```Save```

Under ```Details``` for your newly created API, you will find ```Invoke URL```. This is the URL from the usage example above. You will want to save the URL and use it whenever you need to know the next Fibonacci number in sequence.

Setup is now complete
