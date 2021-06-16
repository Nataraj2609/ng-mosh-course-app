# ng-mosh-course - Mosh Course

## Bootstrap Jquery Install on App 

 (Method 1) — Adding Bootstrap 4 to Angular 10 Usingangular.json
 (Method 2) — Adding Bootstrap 4 to Angular 10 Usingindex.html
 (Method 3) — Adding Bootstrap 4 to Angular 10 Using

npm install bootstrap jquery --save

In angular.json,

            "styles": [
              "src/styles.css",
              "bootstrap/dist/css/bootstrap.min.css"
            ],
            "scripts": [
              "jquery/dist/jquery.min.js",
              "bootstrap/dist/js/bootstrap.min.js"
            ]
	    
	    
## Typescript Fundamentals

### Variables

let str = 'John Wick';

### Type Annotation

 : string;  
 enum color {Red, Blue, Green}        //  ---------> 0,1,2
 
 ### Type Assertions
 
 let str;
 str = 'abc';
 let isEndsWithC = (<string> message).endsWith('c');   // like Type casting [Then Only Suggestions will be listed]
 
 ### Arrow Functions
 
 let doLog : (msg) => {
     console.log(msg)
     };
     
### Interfaces

### Classes - Cohesion

### Objects

   let object : class = new class();
OR let object = new class

### Constructors

KEYWORD - constructor() {}

### Access Modifiers

public, private, protected

### Access Modifiers in constructor

You can initialize in constructor straight away without declaring variables

### Properties ⭐

You can declare a getter/setter for a private variable

In Ts, there is a feature. like for variable x you can create a getter like get X() { return this.x; }
similarly for setter, set X(value) { this.x = value; }

In Calling function, we can make a call like

X = 5; for setting
console.log(X); for getting

Suppose if we want getter/setter to be named get x(), set x() => we need to rename our variable to _x;

x = 5; for setting
console.log(x); for getting

### Modules

export/import

---------------------------------------------------------------------------------------------------------------

## Angular fundamentals

### Components

Every angular app must contain atleast 1 Component -- AppComponent
Reusable

DATA + HTML TEMPLATE + LOGIC

Steps to create a component:
1. Create One
2. Register it in a module
3. Add a template element in an HTML Markup <app-task></app-task>

### Modules

container for group of related components (like inventory)
Every angular app must contain atleast 1 module -- AppModule

### Directives

manipulate DOM
add/del/update a Dom element
eg -- ngFor

---------------------------------------------------------------------------------------------------------------

## Displaying Data & handling Events

### Property binding  []

<div [textContent] = "loadedText"> </div>  ==> bind to property of Ts //DOM Attribute - textContent

<table>
  <tr [attr.colspan]="colspan">   // Here Html Attribute is used, so attr. is used
 </tr>
</table>

### Boostrap & jquery

npm install bootstrap jquery --save
^3.77.7 ===> major.minor.patch

### Class Binding []

<button class="btn" [class.active]= "isActive" />  // In ts, isActive = true

### Style Binding []

<button [style.backgroundColor]= "isActive ? 'blue' : 'green' " />  // In ts, isActive = true

### Event Binding () 😲

Use round bracket

<button (click) = "onSave()"/>

For Event 
<button (click) = "onSave($event)"/>  => In Ts, onSave($event) {console.log($event)};

Output be like 
MouseEvent {isTrusted: true, screenX: 1004, screenY: 152, clientX: 167, clientY: 50, …}

### Event filtering

<input (keyup.enter)="onEnterKeyPressed()"/>

### Templates Variable

For getting data from template
like inputted text from input:

1) Old =>
      <input (keyup.enter)="onEnter($event) />
      onEnter($event){
         console.log($event.target.value);
         }
2) New angular way
       <input #email (keyup.enter)="onEnter(email.value) />
      onEnter(inputtedEmail){
         console.log(inputtedEmail);
         }

###  Two Way Binding

Till above , One direction data binding is done [called Procedural Programming]

To do To way binding,  we need a field in class
1. Don't use template variables     comp --> view
2. Don't use property binding
3. use two way binding              comp <--> view
 
    [(ngModel)] = "email" //ngModel will be in Forms Module and you need to import this module in app.module.ts
    
###  Pipes 🆕

 * uppercase
 * lowercase
 * decimal
 * currency
 * percent

 {{ title | uppercase }}
 {{ score | decimal:'2.1-1' }}   ==> 05.1 if score was 5.129
 {{ price | currency:'INR':'2.1-1' }}
 {{ releaseDate | date:'shortDate' }}

###  Custom Pipes

1. @Pipe()                           ---> pipe name should be given
2. implements Pipetransform()
3. overrides transform(){ return .... }
4. Register it in app.module.ts
5. call them

---------------------------------------------------------------------------------------------------------------

## Building Reusable Components

In app.component.html we used favorit component [so called Host comp]

   <favorite></favorite>
   
   They cannt tak to each other, Input Output Property needs to be set

### Input

1.Import input & use @Input()

    TaskComponent.ts
      @Input() personAssigned = {
      };
    TaskComponent.html
    <button [textContent]="personAssigned.name" (click)="sayHello()"></button>

    App-component.html
    <app-task [personAssigned]="personAssignedArgs"></app-task>

    App-component.ts

    personAssignedArgs = {
    name: 'John Wick'
    }
  
###  Aliasing Input properties
 @Input('personAssignedToKill') personAssigned = {};
 
 TaskComponent.html
    <button [textContent]="personAssignedToKill.name"></button>
    
###  Output properties

a decorator function marking the property as a way for data to go from the child to the parent.

taskComponent.ts

  @Output() emitThisDataEmitter = new EventEmitter();

  ngOnInit(): void {
    this.emitThisDataEmitter.emit('I am the Boss');
  }

App-Componenet.html

<app-task (emitThisDataEmitter)="setField($event)"></app-task>

<div [textContent] = "fetchedFromTaskComponent"></div>

App-component.ts
  fetchedFromTaskComponent!: string;
 
  setField(dataReceived: string){
     console.log("I am called", dataReceived);
    this.fetchedFromTaskComponent = dataReceived;
  }

### View Encapsulation 🆕

SHADOW DOM : Sccoped styles to the lements in our component

Emulated : Default - Created Dynamically --> (_ng_content1)
Native   : uses Native shadow Dom api in browser
None     : will leak to the outside html (OFF Mode)

### ngContent 
Template contents are provided by Cosumer components(like overriding)
     
     <ngContent select = ".parentClass"></ngContent>
     
     In Host Component,
     <favorite>
         <div class="parentClass"><p>Hello World :)</p></div>
     </favorite>

###  ngContainer

The problem with ngContent is that it will add extra div for every replace
If we want to render something without div, use ngContainer
   
   In Host Component,
     <favorite>
         <ng-container class="parentClass"><p>Hello World :)</p></ng-container>
     </favorite>
---------------------------------------------------------------------------------------------------------------

## Directives

 * ngFor
 * ngIf
 * ngSwitchCase
 * ngClass
 * ngStyle
 * Building Custom Directives
                -----------Structural Modifier - DOM Change (needs to prefix *)
 Directives ---|
                -----------Attribute Modifier - Attribute Change
                
### ngIf
    <div *ngIf="isEnabled ; else #noCourses">Hello</div>
    <ng-template #noCourses>
     No Courses
    </ng-template>
    
### ngSwitchCase

ngSwitch - property DOM

   <div [ngSwitch] = "viewMode">
      
       <div *ngSwitchCase="'map'">Map view Content</div>
       <div *ngSwitchCase="'list'">List view Content</div>
       <div *ngSwitchDefault>Default Content</div>
   </div>
   
### ngFor

you can have exported values like index, first, last, even, odd [Last 4 are boolean]

    <li *ngFor="let course of courses; index as i">
       {{i}} - {{course.name}}                    // 1 - AWS Course
    </li>
    
    it uses Change detection mechanism
    
    * use trackBy 
      *ngFor = "let course of courses; trackBy : trackCourse"
      
      In ts file,
         trackCourse(index, course) {
          return course ? course.id : undefined; 
          }
       
### ngClass

   <span class="glyphicon"
      [class.glyphicon-star] = "isSelected"
      [class.glyphicon-star-empty] = "!isSelected" > </span>
      
   can be rewritten as
    
    <span class="glyphicon"
      [ngClass] = {
      'glyphicon-star' : isSelected,
      'glyphicon-star-empty' : !isSelected
      }" ></span>
   
### ngStyle

      <button
        class="btn btn-success"
        [ngStyle]="{
          color: isEnabled ? 'red' : 'black',
          backgroundColor: isEnabled ? 'aqua' : 'black'
        }"
      >
        Click Me
      </button>

### Safe Traversal operator ?

Called null check operator

personAssigned = {
name: 'John Wick',
record: {
   name: null
 }
}

In HTML Comp, when we use {{ personAssigned.record.name }} will through error in console
So use ? operator,

{{ personAssigned.record?.name }}   //This will check for null. if it is assigned, angular will render the element or else no value is displayed but dom structure will be redeemed.

### Creating a custom Directive

ng g d us-phonenumber-directive

(it needs to be registered in app.module.ts & above commad will do it for us)

In this exampe, we are converting input text to Upper case
and hence HostListener is used to convert from text to Upper case

1. Import HostListener from angular/core
2. create a listener like
    @HostListener('blur') onBlur() {
      console.log('on Blur man :/');
    }
3. In Component html, <input type="text" appUsPhonenumberDirective/>
4. we need to get reference to the changed Dom element, angular provides out of the solution, use ElementRef

    constructor(private el: ElementRef) { }

    @HostListener('blur') onBlur() {
      let value:string = this.el.nativeElement.value;
      this.el.nativeElement.value = value.toUpperCase();
    }

5. if we need to change to upper/lower based on components input like <input type="text" appUsPhonenumberDirective [format] = "'uppercase'" />
    declare a @Input() format; to ts file and construct a if/else block
    
6. finally to refactor code we can give a alias name same as that of directive selector name like
     @Input('appUsPhonenumberDirective') format;
     
     & call like <input type="text" [appUsPhonenumberDirective] = "'uppercase'" />

-----------------------------------------------------------------------------------------------------------------------------------------------------------
## Template Driven Forms

 ### Bootstrp Form
 
 we can use zen coding to create html tags in component
 
 Inside form, type 
              div.form-group>label[for='firstName']+input[type='text'][id='firstName'].form-control
 
 and click tab, it will become

              <div class="form-group">
                  <label for="firstName"></label
                  ><input type="text" id="firstName" class="form-control" />
                </div>
                
then div.form-group>label[for="comment"]+textArea[id='comment'].form-control

             <div class="form-group">
                 <label for="comment"></label
                 ><textArea id="comment" class="form-control"></textArea>
               </div>

## Types of Forms

  Forms can be create by two ways
     1. Using Directives  - Template Driven Forms{in-built) less code , less control
     2. Using Code        - Reactive Forms (explicit) has more control

Adding validation to the form
FormControl


## ngModel

Template driven approach can be achieved by adding ngModel and name attribute to a input field

<input ngModel name="firstName" ....

		<input ngModel name="firstName" required
		      #hello=ngModel (change)="sayH(hello)"
		       type="text" id="firstName" class="form-control" />
		<div class="alert alert-danger" *ngIf="hello.touched && !hello.valid"> First Name is Required!</div>

Additionally, we can view the live changes of ngModel like above code

	MUST ADD FORMSMODULE In app.module.ts

## Validation in form

Making input field required & verification can be done like (Attributes of ngModel)

	1. dirty * pristine
	2. valid * invalid
	3. touched * untouched
	4. errors
	5. value & etc ..

## Different kinds of validation errors

	<input ngModel name="firstName" required minlength="3" maxlength="10" ...

		<div class="alert alert-danger" *ngIf="hello.touched && !hello.valid"> 

			<div *ngIf="hello.errors.required"> First name is required!</div>
			<div *ngIf="hello.errors.minlength"> First name should be atleast 3 characters</div>
			<div *ngIf="hello.errors.maxlength"> First name should be less than 10 characters</div>


		</div>

In browser, if we input 2 to the input field

		errors: Object
			minlength:
				actualLength: 2
				requiredLength: 3

The above code will be dispplayed in console if we log ngModel
& error message will be displayed accordingly

In order to avoid strictNullChecks, we can use as below
& in order to dynamically show error message in case minLength is changed in future we need to update in both places[to avoid this]

	<div *ngIf="hello.errors?.required"> First name is required!</div>
    <div *ngIf="hello.errors?.minlength"> First name should be atleast {{hello.errors?.minlength.requiredLength}} characters</div>
    <div *ngIf="hello.errors?.maxlength"> First name should be less than 10 characters</div>

## Styling invalid input fields

Best Practice : you should highlight invalid fields

if the firstName input field is having validation error and then u inspect the html code, you would be seeing

		id="firstName" class="form-control ng-dirty ng-touched ng-invalid" ng-reflect-model="" ng-reflect-name="firstName" ng-reflect-required="" ng-reflect-minlength="3" 

Angular dynamically adds these classes ng-dirty ng-touched ng-invalid, we can make advantage of this.
So apply as a global style.

In style.css, add

		.form-control.ng-touched.ng-invalid{
		    border: 2px solid red;
		}

## Cleaner Templates

Format Code in such a way other developer need not have to scroll

## ngForm

Each form is a FormGroup which control atleast one FormControl

Till above code, angular will apply ngForm directive automatically

			  <form>
			    <div class="form-group">
			      <label for="firstName">First Name</label>
			      <input ngModel name="firstName" required minlength="3" maxlength="10" 
			      #hello=ngModel (change)="sayH(hello)"
			       type="text" id="firstName" class="form-control" />
			       <div class="alert alert-danger" *ngIf="hello.touched && !hello.valid"> 

			        <div *ngIf="hello.errors?.required"> First name is required!</div>
			        <div *ngIf="hello.errors?.minlength"> First name should be atleast {{hello.errors?.minlength.requiredLength}} characters</div>
			        <div *ngIf="hello.errors?.maxlength"> First name should be less than 10 characters</div>

			      </div>
			    </div>
			    <div class="form-group">
			      <label for="comment">Comment</label>
			      <input ngModel name="comment" #textComment=ngModel (change)="sayH(textComment)" id="comment" class="form-control"/>
			    </div>

			In order to get the Form values

			<form #f=ngForm (ngSubmit)="onSubmit(f)">

			In Ts file,   onSubmit(f:any){
						    console.log(f.value)
						  }

Here ngSubmit is an output property and hence () is used

## ngModelGroup

like ngModel directive, ngModelGroup is also a directive

In case our backend api needs complex json object input, we can group multiple ngModel into a group ngModelGroup.

We can use a Template variable to get the reference to ngModelGroup to do validation in ts side.

		<div ngModelGroup="contact" #contact="ngModelGroup">
				  <div class="form-group">
			      <label for="firstName">First Name</label>
			      <div class="form-group">
			      <label for="lastName">Last Name</label>
			       <div class="form-group">
			      <label for="age">Age</label> ...
		</div>

And the response will be like

	contact.
		firstName
		lastName
		age


using the template variable, #contact="ngModelGroup" we can now show validation errors on top of the Group like in Input framework in HUE

## Control classes and Directives

There are two control classes for input field to keep track of STATE of input field & their VALIDITY

		1. FormControl - represents only 1 input
		Related Directives -				ngModel       
		2. FormGroup   - represents group of input fields
		Related Directives -		ngForm       - has ngSubmit output property
									ngModelGroup - doesnt possess any property, used to group a part of a form

	11. Control Classes and Directives.mp4 is useful

## Disabling the submit form
 
	    <form #f=ngForm (ngSubmit)="onSubmit(f)"> ...
	    </form>

    <button class="btn btn-primary" [disabled]="!f.valid">Submit</button>

## Check Box
	
	<div><label>
      <input type="checkbox" ngModel name="isSubscribed"> Subscribe to mailing letter
    </label></div>

    Hack: Add a live testing json data area

    	  <button class="btn btn-primary" [disabled]="!f.valid">Submit</button>

    <p> {{ f.value | json }} </p>

## Drop Down Lists


	<div class="form-group">
      <label for="contactMethod">Contact Method </label>
        <select ngModel name="contactMethod" id="contactMethod" class="form-control">
          <option value=""></option>
          <option *ngFor="let contact of contactMethods" [value]="contact.id">{{ contact.name }}</option>
        </select>
    </div>

we used Property binding to bind value with id

	In Ts file,  contactMethods = [
								    { id:1, name:'email' },
								    { id:2, name:'phone' }
								  ];

## Radio buttons

We use same contactMethods  object as above

	 <div *ngFor="let contact of contactMethods" class="radio">
      <label>
        <input type="radio" ngModel name="contactMethod2" [value]="contact.id"> {{ contact.name }}
      </label>
     </div>

 Json be like
	{ "firstName": "Abraham", "comment": "John", "contactMethod": "1", "isSubscribed": true, "contactMethod2": 2 }

### Reactive Forms

### Consuming Http Services

HTTPCLIENTMODULE

	CRUD
	Code Separation Concerns
	Properly handle different Errors
	Extract a Reusable data service

---> JsonHolder as a backend api

## Consuming Api - Getting Data

	https://jsonplaceholder.typicode.com/posts

	Create a component called PostsComponent

	1. Import HttpClientModule in App.module.ts
	2. Add code in Ts as

		constructor(http: HttpClient) {
		    http.get('https://jsonplaceholder.typicode.com/posts').subscribe(response => {
		        console.log(response);
		    });
	   }
	3. In order to add it to UI


			posts ?:any[];

			  constructor(http: HttpClient) {
			    http.get('https://jsonplaceholder.typicode.com/posts').subscribe(Response => {
			        this.posts = Response;
			    });
			   }

			<ul class="list-group">
			    <li *ngFor="let post of posts "class="list-group-item">{{ post.title }}</li>
			</ul>

## Create Post

1. Create an input text field
			
		<input type="text" 
	    (keyup.enter) = "createPost(title)"
	    #title
	    class="form-control" >
2.In Ts file,
		we need to access http in the class anywhere, but previously we declare it as 

		  constructor(http: HttpClient) {}

		It will be available only in constructor & so declare it as private

		  constructor(private http: HttpClient) {}

## OnInit Interface

Angular provides Lifecycle hooks
	1. Creates a component
	2. Renders it
	3. Creates & renders its children
	4. Destroys a component

		OnInit
		OnChanges
		DoChecck
		AfterContentInit

## Handling Errors

2 types
	1. Unexpected - Server Down, Client Down(No Network), Unhandled exceptions
	2. Expected   - 404 (Not Found - multi tab delete), 400 (Bad Request - Username already exists during Sign up)

## Handling Unexpected errors

For the Observable subbscribe method, there is error blog available in addition to response, use a toaster to display error messages

			  http.get('https://jsonplaceholder.typicode.com/posts').subscribe(Response => {
			      this.posts = Response;
			      console.log(this.posts);
			    }, error => {
			      alert("An Unexpected Error Occured");
			    });

## Handling Expected errors

			  http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
			    Response => {
			      this.posts = Response;
			      console.log(this.posts);
			    }, 
			    (error: Response) => {
			      if(error.status ===404)
			      	 alert("The Record does not exists")
			      else 
			      	 alert("An Unexpected Error Occured");
			    });

## Throwing Application Specific errors

We can handle exceptions like above, but the problem is that we mixed business logic into Ui component class.
So we need to transfer those logics to our service class using catchError operator in rxjs

	All Http Methods get, post, delete, put returns Observables in Angular


	1. Import catch operator from rxjs

	In Angular 11,
		We need to use CatchError operator insted of catch operator in mosh course

		1. Importing RxJS ' catchError() & throwError()
				import { Observable, throwError } from 'rxjs';
				import { catchError } from 'rxjs/operators';

		2. Adding an Error Handling Method to throw Error

				  handleError(error: HttpErrorResponse) {
				    let errorMessage = 'Unknown Error Occured';
				    if (error.error instanceof ErrorEvent)
				      errorMessage = 'Client Side Error has occured' + 'Error: ${error.error.message}';
				    else{
					      switch (error.status) {
						        case 404: {
						          errorMessage = 'Server side Error -- Not Found' + `\nError Code ${error.status}\nMessage: ${error.message}`;
						          break;
						        }
						        case 403: {
						          errorMessage = 'Server side Error -- Access Denied' + `\nError Code ${error.status}\nMessage: ${error.message}`;
						          break;
						        }
						        case 500: {
						          errorMessage = 'Server side Error -- Internal Server Error' + `\nError Code ${error.status}\nMessage: ${error.message}`;
						        }
						        // default: {
						        //   errorMessage = 'Server side Error' + `\nError Code ${error.status}\nMessage: ${error.message}`;
						        //     return `Unknown Server Error: ${error.message}`;
						        // }
					   		   }
						    }
					window.alert(errorMessage);
				    return throwError(errorMessage);
				  }

		3. Add a CatchError to the Http method Observable

				  public createPosts(post: Posts): Observable<any> {
				    return this.http.post('', post).pipe(catchError(this.handleError));
				  }

## Global Error Handling

	1. Create a Global error handling class file and implement the Error Handler interface

			import { HttpErrorResponse } from "@angular/common/http";
			import { ErrorHandler } from "@angular/core";
			import { throwError } from "rxjs";

			export class GlobalErrorHandler implements ErrorHandler {
			    
			    handleError(error: HttpErrorResponse) {
			        let errorMessage = 'Unknown Error Occured';
			        if (error.error instanceof ErrorEvent)
			            errorMessage = 'Client Side Error has occured' + `\nError: ${error.error.message}`;
			        else {
			            switch (error.status) {
			                case 404: {
			                    errorMessage = 'GLobal ERROR Server side Error -- Not Found' + `\nError Code ${error.status}\nMessage: ${error.message}`;
			                    break;
			                }
			                case 403: {
			                    errorMessage = 'Server side Error -- Access Denied' + `\nError Code ${error.status}\nMessage: ${error.message}`;
			                    break;
			                }
			                case 500: {
			                    errorMessage = 'Server side Error -- Internal Server Error' + `\nError Code ${error.status}\nMessage: ${error.message}`;
			                }
			                // default: {
			                //   errorMessage = 'Server side Error' + `\nError Code ${error.status}\nMessage: ${error.message}`;
			                //     return `Unknown Server Error: ${error.message}`;
			                // }

			            }
			        }
			        window.alert(errorMessage);
			        //  return throwError;
			    }
			}

	2. In AppModule, we need to tell angular to use Above class in place of default error handler
			
			  providers: [
			    PostsService,
			    { provide: ErrorHandler, useClass: GlobalErrorHandler }
			  ],

	 Now we registred GlobalErrorComponent, angular will handle errors in our app
	 In service class,

		  public getPosts(): Observable<any> {
		    return this.http.get(this.baseURL);
		  }

		  public createPosts(post: Posts): Observable<any> {
		    return this.http.post('this.baseURL', post);
		  }

	 In Component,

		  createPost(inputTitle: HTMLInputElement) {
		    let post = { title: inputTitle.value };
		    inputTitle.value = '';
		    this.postsService.createPosts(post).subscribe(
		      response => {
		        console.log(response);
		        this.posts?.splice(0, 0, response);
		      });
		  }

		  getPosts() {
		    this.postsService.getPosts().subscribe(
		      response => {
		        this.posts = response;
		      });
		  }

	Additionally we can rethrow error in order to get in Component error part as implemented above.

## Extracting a Reusable Data service

	We can create a generic Service class - DataService.ts without url

	In PostComponent, delete all above methods and use INHERITANCE

				PostService extends DataService

				constructor( http : HTTP ) {
					super('url_OF_API', http : HTTP);
				}

	Atlast, change method names in PostComponent  getPosts() => getAll()

## map Operator

	we can use map operator to transform Response of an Observable

## Optimistic & Pessimistic Updates

Optimistic: Update Client side & then server side resource, if anything fails, rollback
Pessimistic: Update server side & then Client side resource, Slow to User

## Observables Vs Promises

	Observables are Lazy
		Promises are Eager

	Observables are Asynchronous and wont work until it is subscribed

	We can convert Observables to Promises using toPromise() Operator
	So Promises will not be subscribed,

	There we can use only then() , catch(). Without calling this operator itself, Promises are Executed Eagerly


Observables are made Because of USING OPERATORS ON DATA - .map, .retry(3),...

This is called REACTIVE PROGRAMMING (rxjs)


### Routing and Navigation

	1. Configuring routes
	2. Implementing SPA - Single page application
	3. Working with routes and query parameters
	4. Programmatic Navigation

### Routing in a nutshell

	Modules learned so far
		Forms
		Reactive Forms
		Http
		and Now Router

Three steps
	1. Configure the routes
	2. Adding Router-outlet
	3. Adding links

### Router - 3 steps

1. Create A Navbar Component
		Import RouterModule from @angluar/router in App.Module.ts
		In Imports[], add 
				 RouterModule.forRoot([ { path: 'followers', component: FollowerComponent},             --> No slash
				 						{ path: 'profile/:userName', component: ProfileComponent},      --> Path Variable
				 						{ path: '**', component: NotFoundComponent}, ]) ; 		      --> Wildcard 

IN ANGULAR 11, while creating app, you are asked to include Routing in app 
	If YES --> app-routing-module.ts will be created & registered in App.module itself. Just add Routes to app-routing-modules
	If N0  --> Do it manually
 
2. Add router-outlet (directive defined in the router component) to the App Component.html next to <navbar>
	[only 2 will exists for eg.]

3. DONT USE HREF - Whole page will be reloaded
	Use a directive called routerLink

	1. Simple routes            <a routerLink = "/followers" > Click </a>
	2. Routes with Path Params  <a [routerLink] = "[ 'profile' , item.id ]" > {{ item }} </a>

### Router Link Active

In order to show active links in NavBar, angular provides routerLinkActive directive like routerLink
		
		<li class="nav-item" routerLinkActive="active current">
          <a class="nav-link" routerLink="/notes">Sticky Notes</a>
        </li>
        <li class="nav-item" routerLinkActive="active current">
          <a class="nav-link" routerLink="/books">Book Api</a>
        </li> 

### Getting the Route Parameters

Register the Route as

  {path: 'order/:id', component: OrderComponent},

Now hit http://localhost:4200/order/1 in browser then only you can see the Order Component page or else wildcard page is displayed if we hit 
http://localhost:4200/order alone

In the OrderComponent.ts, in order to get Route Parameters

		  constructor(private route: ActivatedRoute) { }

		  ngOnInit(): void {
		    this.route.paramMap.subscribe(params =>{
		        console.log(params.get('id'));
		        let id = params.get('id');
		        service.getProfileById(id);
		    });
		  }

### Why Route Parameters Are Observables

Angular will not recreate the component if only route parameters are changed asyncronously and hence paramMap is an Observable.

Example, The view page having Next button order/1 to --> order/2
The layout will be same (component) & only service call is required.

In case if we dont want an observable meaning You want to reload component everytime (no next button is there), we can use snapshot

	let id = this.route.snapshot.paramMap.get('id');
	console.log(id)

### Routes with multiple Parameters

	/followers/:id/:username

	In Html, <a [routerLink] = ['/followers', profile.id, profile.username] > {{ profile.name }} </a>

### Query Parameters [Optional?]

	/order?qty=2

	1. Sending Part

		<a [routerLink] = ['/followers', profile.id, profile.username] 
		[queryParams] = "{ page: 1, order: 'newest' }"> {{ profile.name }} </a>
 
 		When u click, http://localhost:4200/order/2?page=1&sort=asc

 	2. Receiving Part

 		    let queryParam = this.route.queryParamMap.subscribe(Response => {
		      console.log(Response);
		    })

		    ParamsAsMap {params: {…}}
				params:
					page: "1"
					sort: "asc"
			__proto__: Object
			keys: (...)
			__proto__: Object

			You can also use snapshot, but queryParamMap Observable will be conventional use case.

### What if Both paramMap & queryParamMap needs to be subscribed at once

	Sometimes we need to subscribe to multiple Observables at once. A typical scenario is when using multiple HTTP requests. In this example, we will use the RxJS operator ForkJoin.

			let posts = this.http.get('https://jsonplaceholder.typicode.com/posts');
			let peoples = this.http.get('https://jsonplaceholder.typicode.com/peoples');

	    forkJoin([ posts, peoples ]).subscribe(results => {
	      console.log(results[0]);
	      console.log(results[1]);
	    });

### Button on click - navigate routes

	Navigate the User Programmatically with Optional Query Parameters

	Add a Button & event biknd click to a function

	1. add Router module in Constructor of the component
	2. For Example, our destination is http://localhost:4200/order/2?page=1&sort=asc

			submit(){
		    this.route.navigate(['/order', 1], {
		      queryParams: { page:1, sort: 'asc'}
		    });
		  }

--------------------------------------------------------------------------------------------------------------------------------------------


## Auhtentication & Authorization

	In this Section ..

	JWT
	Stateless Authentication
	Protect Routes
	Redirect the Users to login Page / access Denied page
	show/hide elements
	Get the current user
	Consume Protected Api endpoints

### Okta - Sample


https://www.oauth.com/playground/client-registration.html?returnto=authorization-code.html#

	client id
	rOf9BI7Mdt2qXxMZUpcVqVEU


	client secret
	7AY74e1Se0_b5hCKQoquV4lsA9dnN4kTlWWtnQrhywtS1vh9


	login light-cottonmouth@example.com
	password Shy-Pheasant-84


			1. Build the Authorization URL

			https://authorization-server.com/authorize?
			  response_type=code
			  &client_id=rOf9BI7Mdt2qXxMZUpcVqVEU
			  &redirect_uri=https://www.oauth.com/playground/authorization-code.html
			  &scope=photo+offline_access
			  &state=zRfVw6ecoiXkcPr4
			
			Before authorization begins, it first generates a random string to use for the state parameter. The client will need to store this to be used in the next step.


			2. After the user is redirected back to the client, verify the state matches

			The user was redirected back to the client
				?state=zRfVw6ecoiXkcPr4&code=DHEr06NP9UwVsZarZ0n-uzcMoG5YLcsgVuPTNi8Jrve-Q32e


			3. Exchange the Authorization Code

				Now you're ready to exchange the authorization code for an access token.

				POST https://authorization-server.com/token

				grant_type=authorization_code
				&client_id=rOf9BI7Mdt2qXxMZUpcVqVEU
				&client_secret=7AY74e1Se0_b5hCKQoquV4lsA9dnN4kTlWWtnQrhywtS1vh9
				&redirect_uri=https://www.oauth.com/playground/authorization-code.html
				&code=DHEr06NP9UwVsZarZ0n-uzcMoG5YLcsgVuPTNi8Jrve-Q32e



				Token Endpoint Response

				Here's the response from the token endpoint! The response includes the access token and refresh token.


						{
						  "token_type": "Bearer",
						  "expires_in": 86400,
						  "access_token": "Hug6EHeSVGVy6_xvZX7Y74aHLnIZPuRyx212d2Oyr5P6_61YZHKhm--ud-yBibenqPkgKBvI",
						  "scope": "photo offline_access",
						  "refresh_token": "fbwqW2a3lJyVdGF3XTuDa9pJ"
						}


OKTA Account

riderdon26@
Riderdon@26


Oauth 2 App name : My API Services App

Client Id:     0oawnpfrvCafsJ4bv5d6 
Client secret: mb2r7ndFswFN80I0ObcKnXhWE0ECrgimjo927l-S


Okta domain: dev-72542490.okta.com


https://${yourOktaDomian}/api/v1/authorizationServers/default
https://dev-72542490.okta.com/api/v1/authorizationServers/default

		{
		"id": "auswfei9ulyk79PVk5d6",
		"name": "default",
		"description": "Default Authorization Server for your Applications",
		"audiences": [
		"api://default"
		],
		"issuer": "https://dev-72542490.okta.com/oauth2/default",
		"issuerMode": "ORG_URL",
		"status": "ACTIVE",
		"created": "2021-06-08T12:03:34.000Z",
		"lastUpdated": "2021-06-08T12:03:34.000Z",
		"credentials": {
		"signing": {
		"kid": "J_IUrogE3k3F4NOpysMhe-W0HbI3CH8CLF7pgoHMy5Q",
		"rotationMode": "AUTO",
		"lastRotated": "2021-06-08T12:03:33.000Z",
		"nextRotation": "2021-09-06T12:03:33.000Z"
		}
		},
		"_links": {
		"rotateKey": {
		"href": "https://dev-72542490.okta.com/api/v1/authorizationServers/default/credentials/lifecycle/keyRotate",
		"hints": {
		"allow": [
		"POST"
		]
		}
		},
		"metadata": [
		{
		"name": "oauth-authorization-server",
		"href": "https://dev-72542490.okta.com/oauth2/default/.well-known/oauth-authorization-server",
		"hints": {
		"allow": [
		"GET"
		]
		}
		},
		{
		"name": "openid-configuration",
		"href": "https://dev-72542490.okta.com/oauth2/default/.well-known/openid-configuration",
		"hints": {
		"allow": [
		"GET"
		]
		}
		}
		],
		"keys": {
		"href": "https://dev-72542490.okta.com/api/v1/authorizationServers/default/credentials/keys",
		"hints": {
		"allow": [
		"GET"
		]
		}
		},
		"claims": {
		"href": "https://dev-72542490.okta.com/api/v1/authorizationServers/default/claims",
		"hints": {
		"allow": [
		"GET",
		"POST"
		]
		}
		},
		"policies": {
		"href": "https://dev-72542490.okta.com/api/v1/authorizationServers/default/policies",
		"hints": {
		"allow": [
		"GET",
		"POST"
		]
		}
		},
		"self": {
		"href": "https://dev-72542490.okta.com/api/v1/authorizationServers/default",
		"hints": {
		"allow": [
		"GET",
		"DELETE",
		"PUT"
		]
		}
		},
		"scopes": {
		"href": "https://dev-72542490.okta.com/api/v1/authorizationServers/default/scopes",
		"hints": {
		"allow": [
		"GET",
		"POST"
		]
		}
		},
		"deactivate": {
		"href": "https://dev-72542490.okta.com/api/v1/authorizationServers/default/lifecycle/deactivate",
		"hints": {
		"allow": [
		"POST"
		]
		}
		}
		}
		}

https://dev-72542490.okta.com/oauth2/default/.well-known/oauth-authorization-server

{
   "issuer":"https://dev-72542490.okta.com/oauth2/default",
   "authorization_endpoint":"https://dev-72542490.okta.com/oauth2/default/v1/authorize",
   "token_endpoint":"https://dev-72542490.okta.com/oauth2/default/v1/token",
   "registration_endpoint":"https://dev-72542490.okta.com/oauth2/v1/clients",
   "jwks_uri":"https://dev-72542490.okta.com/oauth2/default/v1/keys",
   "response_types_supported":[
      "code",
      "token",
      "id_token",
      "code id_token",
      "code token",
      "id_token token",
      "code id_token token"
   ],
   "response_modes_supported":[
      "query",
      "fragment",
      "form_post",
      "okta_post_message"
   ],
   "grant_types_supported":[
      "authorization_code",
      "implicit",
      "refresh_token",
      "password",
      "client_credentials"
   ],
   "subject_types_supported":[
      "public"
   ],
   "scopes_supported":[
      "openid",
      "profile",
      "email",
      "address",
      "phone",
      "offline_access"
   ],
   "token_endpoint_auth_methods_supported":[
      "client_secret_basic",
      "client_secret_post",
      "client_secret_jwt",
      "private_key_jwt",
      "none"
   ],
   "claims_supported":[
      "ver",
      "jti",
      "iss",
      "aud",
      "iat",
      "exp",
      "cid",
      "uid",
      "scp",
      "sub"
   ],
   "code_challenge_methods_supported":[
      "S256"
   ],
   "introspection_endpoint":"https://dev-72542490.okta.com/oauth2/default/v1/introspect",
   "introspection_endpoint_auth_methods_supported":[
      "client_secret_basic",
      "client_secret_post",
      "client_secret_jwt",
      "private_key_jwt",
      "none"
   ],
   "revocation_endpoint":"https://dev-72542490.okta.com/oauth2/default/v1/revoke",
   "revocation_endpoint_auth_methods_supported":[
      "client_secret_basic",
      "client_secret_post",
      "client_secret_jwt",
      "private_key_jwt",
      "none"
   ],
   "end_session_endpoint":"https://dev-72542490.okta.com/oauth2/default/v1/logout",
   "request_parameter_supported":true,
   "request_object_signing_alg_values_supported":[
      "HS256",
      "HS384",
      "HS512",
      "RS256",
      "RS384",
      "RS512",
      "ES256",
      "ES384",
      "ES512"
   ]
}

https://dev-72542490.okta.com/oauth2/default/v1/authorize?response_type=code&client_id=0oawnpfrvCafsJ4bv5d6&redirect_uri=https://www.example.com&client_secret=mb2r7ndFswFN80I0ObcKnXhWE0ECrgimjo927l-S


### Cognito Aws Integration

Callback URL: http://localhost:4200/home
Signout URL : http://localhost:4200/logout

HOME:

welcome {{ username }}

Login
Admin
Logout


https://pocexample.auth.us-west-2.amazoncognito.com/login?client_id=5puctv0a9k5ne847fvs37pllcm&response_type=code&scope=email+openid&redirect_uri=http://localhost:4200/home

http://localhost:4200/home?code=0835a4ce-cf2f-423a-83ca-e1bb917f7e6f

Now in Home Component, I need to get Code Query Parameter

    this.route.queryParamMap.subscribe(Response => this.paramMap = Response);

Now we need to call oauth2/token


	We need to send client id secrets and all in body as x-www-form-urlencoded in body.

		https://gist.github.com/dherges/442d3a7bc65e3e46d8dead728e4d8be8

				login(user: string, password: string): Observable<boolean> {
			    const body = new HttpParams()
			      .set(`user`, user)
			      .set(`password`, password);
			    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

			    return this.http.post(`auth/login`, body.toString(), { headers, observe: 'response' })
			      .map((res: HttpResponse<Object>) => res.ok)
			      .catch((err: any) => Observable.of(false));
			  }

	access_token: "eyJraWQiOiJrMnZKRFc4aHhuTVwvaTlnNHpYU00wQ1RlZDN5VW12ZWc0Vjl3WEU5NUFudz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJmMzk0ODBkOC03ODMzLTQxM2ItYjI3OS04ODc5M2YzNWIxYTciLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6Im9wZW5pZCBlbWFpbCIsImF1dGhfdGltZSI6MTYyMzM5NDMxOSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLXdlc3QtMi5hbWF6b25hd3MuY29tXC91cy13ZXN0LTJfT1oyNmc4Zm9wIiwiZXhwIjoxNjIzMzk3OTE5LCJpYXQiOjE2MjMzOTQzMTksInZlcnNpb24iOjIsImp0aSI6IjhjZTVlNzk4LTJmZjItNDA0Zi1hYTUyLTQyNWUzNzU2NTM2MSIsImNsaWVudF9pZCI6IjVwdWN0djBhOWs1bmU4NDdmdnMzN3BsbGNtIiwidXNlcm5hbWUiOiJuYXQifQ.U2DRnF_i5--4OnCvbTA9NhCYodiyEfQSN48I7KVLQxgR9WH6fNPbUWS6sR9e3uWifFEdaSScfsjyJ9bQd3Tgmob5DBCaq9QJn6gNlDfGwf4TfyJe_hWhgt_zYg0M6uAK2Wcg5P2V6Noj1mwVS4XNWAQL3n6V33O31vZQP5Ap9KNP0uhAr4MP4MJpAPiaVr3eDq-x7Th7ew_4J6FovPNR41dVvHEGJtjs-g6PNG5Wx3JHDCI8ZrLEsdcLnenX2xLYu1q91-XiAg53YuLazIvL4mSOFp4Plas0ztJ83M__RLILUVJ4YG9_cFXa7F3S_-J8hw7BtSnMt-2C2fnY4iDwUQ"
	expires_in: 3600
	
	id_token: "eyJraWQiOiJRVTdmM2FKUXJqTlA5MmxCeDNYXC9JYWZ4a21aWUYwN3RtcjNCRGl5ZnVTUT0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiVkd3NUNfakdaalU4Sk1JR29WeTJLZyIsInN1YiI6ImYzOTQ4MGQ4LTc4MzMtNDEzYi1iMjc5LTg4NzkzZjM1YjFhNyIsImF1ZCI6IjVwdWN0djBhOWs1bmU4NDdmdnMzN3BsbGNtIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjIzMzk0MzE5LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9PWjI2Zzhmb3AiLCJjb2duaXRvOnVzZXJuYW1lIjoibmF0IiwiZXhwIjoxNjIzMzk3OTE5LCJpYXQiOjE2MjMzOTQzMTksImVtYWlsIjoibmF0YXJhai5tYW5pdmFubmFuQGlkZWFzMml0LmNvbSJ9.exJxGaB5xNO6puDcOhz9IJc0hX4-whMXPdHLNkrM9-qrjYS4Ok8dvVBQ2SGaLm39KqWSh5pu2nI7WcyQSAV6q8gTz37njbK2e9oLmFIPtHJpk4p7N87wdDyLTR4Yad-x3SFtxWIz2iljstN05sChiJj0pDYh7642ktHQSHqlxG8u8k1rxjEhQ1i-rZ2ltksaQjopubWamCGiE_Z9ERrWllDRJ0Xpcdpp5vqNlx1Gi16XIc6oGLFq5ylV4nFlvcwH1dcRM-W1pjlDlVSTqEdWYGJvDbZdv5g58d0eLrM5RMFf9ifJHGL2DQcIvoMBNvZwpRCGShMbA7x4adWAFAv0bw"
	
	refresh_token: "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.Ck8s9JKUtuUoPBcxwMOyejxfr-8OdouYgH_Y2QUjfbMztBJtPhpnaOzXpY0Nd8rfe7ak-hCd5bnxOWGoF_0MoLu3_YvoYbO2oibZuJmrKBigvNdVyavVKJTwqKPOPUcTtZRiC_b8FGeKAUWG4kr-bSGleDlQPCkW2djlJVobkArkEMQ5NDXV4saJzdpMRJOHKkaWBIbJzaYgXYCfMEe-pQiy6RoamIguOFAM2d91Uppemt7bcuMQmYkvAawPGYjRWQRTt1RmV2ovGJdvp9yw7Q5RQufD6AcLb3vcx-aJQteTGkEs4QqdTUD3d0rNFgupkAgnWsmRq1TcO8tUFuUaKA.O4z9ME8PuqT9Rht7.ncSHtE1tke5CTsI9rpo5jUJRmw8UpWZ_milZb07nHXRk26IDqG-F65FPEulGZbY-DiWkdM7SBdutTeUh5x7VlyI3hmWW9sjyfXV5sZZ99D1c_VZhsTBI31hCgluzh_-BiNL0Gl7ZvGHzZP6NuPergorzC5kWt4KpBHi7MK3Pd_-5Hj7NTHBaNiq7Z-Wg1pkRGJV6PC_B2SPKibfby0dGwZJFvJDGeHGAA9pmfiFDPIA507yihN5qY2l_GbgOERNVNZHfEPsnxRP9qceey9rjuZKuOsl0nc4M-imjHJZoZ2oFNbkRP9TnX7eO-u4ue6z3YwboRlTnUoeYaaijK6YImhDkMiWGakLamts1o8Bj5VfBHcI8RxggIC6zFibOHvfgjalCzmQ5vcHvP0Wb2nd2NEF-MwV43ALZ2hXq46Lqbl3M330THQOmeXWfaIWJo3XkZov2brx4Qwwgxl52iFzrNG-IEKL-lRcJfywBsc5egAPIXaAmjLe_5EP0kTNt7-NZHJRpcznM0L9gLikytLbnIbv0v8uA4tK65Po2kuknO6RrsVAUR65t_Y6IdqUr4nx01XZvGAuFkrqkcoNHKXBMdFUTSjnngsxoAQxQVmCu7ih13FamFmz2SHDH5ece6357mGnZaufyuDOs2g-6ewT-hGvuUgfw8vcGtgOac82FBDDH5Zb5ryK8lJwoFQ8wCe9z9UijCReWRg3Qnv2lFzhkchA5JcSSaGfVp_SrkffGE6JLdx7CiKImPfnlFvNncBGWqmuvVppeIK6eYDev9hHKhRdICmb6F56vi-SFDHvPxaJpiwYxkJHb0y3KtcvA6boR1NlHtMEb-ldzw-2NAO0NnhNzjp9aeB5-sozNh0Q8I93ANYenpDWB9x6T8R5QarxVSX1iXGdobjSk_i79jjHGuAzzCB9jHA9NbDLlO9jAJ4HA4Eq9eI6nGxZwnZJqIYqgv1pmeSTaBjCxZbtECT1xE_JfxSI03nPgiWAql54vBL08YZ-59nwUfmkEnw5BjDGkFvajEOmRrWQqxZEKbmRl4-GYRJ4H4BKdDRJepA1YTEZ5-XynKFygZ9zGnnNHishKMBxUNK5Gm6rjYB7Mi1HysBn2wgTQN99pKDlXtixCfBUikCXXm0xq3KcUCIKCJbcU0Em8m2PXOk5F2dD7EzgZUkqdK04MtXcg4A.wUJsY7r4APwJfDBK-_6QiQ"

	token_type: "Bearer"

Saved id_token in local storage

Now we will embed guarded Api in Admin Service & will access it in /admin page


### canActivate Interface to guard url - access denied pages

routeGuard is used.

	ng g s services/auth-guard

	1. Change class name to AuthGuard

    2. implements canActivate interface

    3. provide logic for canActivate() method

    4. constructor(
		    private router: Router
		    ) { }

		  canActivate() {
		    if(localStorage.getItem('id_token'))
		      return true;
		    this.router.navigate(['/home']);
		    return false;
		  }

	5. Finally in routing module,

	  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },

### redirectUrl working

when logged out, accessing admin page will redirect to /login?redirectUrl="/admin"

In the canActivate method,

	 canActivate(route: any, state: RouterStateSnapshot) {
	    if (localStorage.getItem('id_token'))
	      return true;
	    this.router.navigate(['/login'], { queryParams: { redirectUrl: state.url } });
	    return false;
	  }


In the Login Component,

		  constructor(
		    private route: ActivatedRoute,
		    private router: Router
		  ) { }

		  ngOnInit(): void {
		    let redirectUrl = this.route.snapshot.queryParamMap.get('redirectUrl');
		    this.router.navigate([redirectUrl || '/']);
		  }

------------------------------------------------------------------------------------------------------------------------------------

Optimisation techniques

Minification - removing spaces & unwanted comments
Uglification - reducing variable name to short ones
Bundling - Angular cli will do auto
Dead code elimination
Ahead Time of Compilation 


All these can be done by 

ng build --prod







Atlast do https://ecotrust-canada.github.io/markdown-toc/


