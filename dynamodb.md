# Installing NodeJS Application on AWS

## Getting the files

To get application files, please clone [this](https://github.com/kovarmiko/dynamodb-gallery) repo and follow the readme.md file if you would like to run it locally.

## Creating AWS account

To create an account visit [this page](https://aws.amazon.com/) and click create an AWS account button in the top right hand corner. The process will take you through a registration of your personal details including the verification of your credit card.

![img1](https://github.com/kovarmiko/dynamodb-gallery/blob/master/mdimages/img1.png?raw=true "Image 1")

## Creating IAM user

To start using AWS an IAM user with the proper permissions needs to be created. To do this, please, log in and then visit this [page](https://console.aws.amazon.com/iam).

![img2](https://github.com/kovarmiko/dynamodb-gallery/blob/master/mdimages/img2.png?raw=true "Image 2")

Here on the left hand side click „Users“ and then „Create New Users“ button as shown below.

![img3](https://github.com/kovarmiko/dynamodb-gallery/blob/master/mdimages/img3.png?raw=true "Image 3")

On the next page insert one username and then hit create. Amazon will create the user for you taking you to the next page where user „Access Key ID “ and  „Secret Access Key “ are shown (see below). Make sure to save these credentials somewhere safe, you'll need them in the application.

![img4](https://github.com/kovarmiko/dynamodb-gallery/blob/master/mdimages/img4.png?raw=true "Image 4")

The newly created IAM user is useless at this point because it has no permissions. Let's change that. Click download credentials or close in the above screen and that action should take you to the Users tab of IAM. If not, click [here](https://console.aws.amazon.com/iam/home#users). 
 
In the Users tab of IAM you should notice your newly created user in a list. To edit your user just click on the row in the table:
 
![img5](https://github.com/kovarmiko/dynamodb-gallery/blob/master/mdimages/img5.png?raw=true "Image 5")
 
In the User Detail page select „Permissions tab“ and then  push „Attach Policy“ button.
 
![img6](https://github.com/kovarmiko/dynamodb-gallery/blob/master/mdimages/img6.png?raw=true "Image 6")

A list with policies should appear. We need access to the dynamoDB, the NoSQL database run by Amazon. To grant access,  please find policy named „AmazonDynamoDBFullAccess“ and attach it to the user.

Your user is now ready. 

## Adding IAM user credentials to the NodeJS applicatoin

In our application copy file /config/DefaultAwsConfig.json into /config/AwsConfig.json

Inside AwsConfig.json replace XXX with  „Access Key ID “ and  „Secret Access Key “ of the user we just created. 

## Preparing application to be uploaded to the AWS
A convenient way to ship application to AWS is to 'zip' it and upload it to the AWS environment.

To do this, please, select almost ever file and folder in the root of the application and 'zip' it. I chose the word 'almost' because tyou shouldn't 
include the following files:

* node modules folder()
* everything that is not part of the application (examples include : git files, project files created by IDEs and so on)

The general rule of thumb is that if you are not sure what the file does you are safer to include it.

## Setting up AWS environment

At this point we have the application ready to be to be shipped. But where? This section will explain 'the where' part.

Please visit the [home](https://us-west-2.console.aws.amazon.com/console/home?region=us-west-2) of AWS taking your browser the following screen. Here, click „Elastic Beanstalk“.


![img7](https://github.com/kovarmiko/dynamodb-gallery/blob/master/mdimages/img7.png?raw=true "Image 7")

The link points to the home of Elastic Beanstalk where the environment for your application will be created. 
On the new screen click „Create New Application“ as shown below. 

Please note that your screen will look a little bit diferrent. Mine contains running applications in green boxes.

![img8](https://github.com/kovarmiko/dynamodb-gallery/blob/master/mdimages/img8.png?raw=true "Image 8")

In a dialog, not shown, insert „Application Name“ and „Description“ and confirm by pushing the „Create“ button. This will create the application.

I named my application „test app“. In the next screen click  „Actions“ and „Create New Environment“ as shown bellow.

![img9](https://github.com/kovarmiko/dynamodb-gallery/blob/master/mdimages/img9.png?raw=true "Image 9")

In a dialog keep the „Web server environment“ radio button selected and click  the „Select“ button.

![img10](https://github.com/kovarmiko/dynamodb-gallery/blob/master/mdimages/img10.png?raw=true "Image 10")

In the next screen, which is named „Create a new Environment“, fill in the form. 
Make sure to select Node.js for platform inside the select box. For application code choose radio button next to the „Upload your code“ then upload the 'zip' file and click create environment.

![img11](https://github.com/kovarmiko/dynamodb-gallery/blob/master/mdimages/img11.png?raw=true "Image 11")

If you are thinking about a coffee break, this is the right moment! The process will complete in about 5 minutes.

If the process is successful, you should see the following screen. The URL in the brackets next to the Environment ID takes you to your application. 

However, clicking on that oftentimes returns nothing other than a server error. Try it to see for yourself.

To address this problem, we need to configure the site. In your environment click the "Configuration tab" as the below picture indicates.

![img13](https://github.com/kovarmiko/dynamodb-gallery/blob/master/mdimages/img13.png?raw=true "Image 13")

Click the settings wheel next to the Software configuration.

![img14](https://github.com/kovarmiko/dynamodb-gallery/blob/master/mdimages/img14.png?raw=true "Image 14")

And fill in „npm start“ for the node command and hit the „apply“ button at the bottom.

![img15](https://github.com/kovarmiko/dynamodb-gallery/blob/master/mdimages/img15.png?raw=true "Image 15")

Now, when you click the application URL all should work.