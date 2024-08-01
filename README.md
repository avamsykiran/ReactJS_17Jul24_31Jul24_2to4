React JS
--------------------------------------------------------------------

    Objectives
    --------------------
        1)Create cross-platform native applications with React
        2)Create and use stateful components
        3)Handle Data flow between client and server in the applications
        4)Demonstrate on bundle and build applications and depedencies effectively
        5)Use data querying language to handle complex,nested data dependencies
        6)Build a data driven react application
        7)Apply React/GraphQL/Relay best practices

    Pre-Requisites
    --------------------
        HTML 5
        CSS 3
        JavaScript (ES 6)
        Bootstrap 5 (optional)

    Lab Setup
    ---------------------

        VS Code (latest) IDE
        Chrome  (browser)
        NodeJS (Dev - Platform) , npm (build tool)

    Introduction
    ---------------------

        is a javascript based SPA framework.
        SPA - Single Page Application.

        NodeJS is a dev env, but not a exe., env.,

        (a) React Applications are extendable. (means that we can define our own html eleemnts and attributes)
        (b) React is highly interaperable and is modular.
        (c) React supports JSX for html dom manipulation.

    JSX - JavaScript eXtended
    ----------------------------

        is a combination of html and javascript together.

        .js

            let userName = "Vamsy";
            let pObj = document.createElement("p");
            pObj.innerText = `Hello ${userName}`;

        .jsx

            let userName = "Vamsy";
            let pObj = <p> Hello {userName} </p>

        .js

            let friends = ['Vamsy','Murthy','Swapna','Suresh'];
            let olObj = document.createElement("ol");

            friends.forEach( f => {
                let liObj = document.createElement("li");
                liObj.innerText = f;
                olObj.append(liObj);
            });

        .jsx
        
            let friends = ['Vamsy','Murthy','Swapna','Suresh'];
            let olObj = (
                <ol>
                    {
                        friends.map( f => <li> {f} </li> )
                    }
                </ol>
            );

        JSX Rules
            (a) JSX is case sensitive. 
                (i) all html elements will be lower in case.
                (ii) all html attributes will follow camelCase.
                (iii) React Components must follwo InitalCapitals.
            (b) 'class' attribute is not allowed, 'className' attribute is to be used instead.
            (c) one single Javascript object can refer to only one single DOM element.

                let obj1 = <h3> a heading </h3> <p> a description </p> ;                //invalid
                let obj1 = <div> <h3> a heading </h3> <p> a description </p> </div>;    //valid

                const greetUser = userName => (                     //invalid
                    <h3> Welcome {userName} </h3>
                    <p> We are happy to have you here </p>
                );
                
                const greetUser = userName => (                     //valid
                    <section>
                        <h3> Welcome {userName} </h3>
                        <p> We are happy to have you here </p>
                    </section>
                );

    React Components
    ------------------------

        a Component is a reusable unit of code representing a user defend html element.

        Function Components
            is any javascript function that returns an html element.

            const MyBrand = () => (
                <section>
                    <h3>LG</h3>
                    <h5>Life's Good</h5>
                </section>
            );

            <MyBrand />

        Class Components
            is a javascript class dereived from 'React.Component'.

            class Dashboard extends React.Component {
                constructor(){
                    super();
                    this.state = {
                        userName:'Some Body'
                    };
                }

                render(){
                    return (
                        <div>
                            <h3>Welcome {this.state.userName}</h3>
                        </div>
                    );
                }
            }

            <Dashboard />

        High Order Components        

            is any javascript function that accepts a Component and returns a modified one.

    Create a React App
    --------------------------------
        npm i -g create-react-app
        create-react-app app-name

        (or)

        npx create-react-app app-name

    
    React Properties 'props' in short
    ----------------------------------

        'props' carry data from a parent component to a child component.

        the paent component can pass as many attributes as it wants to the child component.

        the child component can receive 'props' as an object having those atributes.

        the 'props' is passed as an argument to the function component and as a constructor
        paramater for a class component.

    Class Components
    ------------------------------------

        is any class that is dereived from React.Component.

        A class componenet inherits the following from the Component:

            1. 'state'
            2. 'setState()'
            3. 'render()'
            4. 'componentDidMount()'
            5. 'componentDidUpdate()'
            6. and a few more life cycle methods.

        state       is the object that holds all the data related to the component.

        render()    is to be ovveridden to return the html-content that has to appear for the component.
                    the render() gets invoked automatically after the constructor of the component.
                    the render() is also invoked everytime the 'state' gets changed.

        setState()  'state' is a immutable object, and can be initialized only once in the constructor.
                    'setState()' method is used to replace the value of the state with a new value.
                    meaning, each time setState() is called, render() follows.

    Integrating Bootstrap
    -----------------------------------

        npm i bootstrap

        in the index.js file
            import 'bootstrap/dist/css/bootstrap.min.css';
            import 'bootstrap/dist/js/bootstrap.bundle';

    Class Component Life Cycle
    -----------------------------------

        constructor()                   // used for initialization of state
            ↓
            render()                    // return the html content to be displayed
                ↓
                componentDidMount()     // used for any asynchronous initial operations
                    ↓   
                    /***************************************************************/
                        until 'setState()' is called, the component will be idle.
        |----------→    'setState()' can be called in the componentDidMount / in any event handler ...etc.,
        |           /***************************************************************/    
        |                   ↓
        |                   render()                    // return the html content to be displayed
        |                       ↓
        |                       componentDidUpdate()    // used for side effects
        |                           ↓
        |----------------------------

    React Hooks
    ------------------------------------

        a hook is a function that provides additional feature to a function component

        useState        provides state maintenence to a function componnet

                        let [reader,writer] = useState(initalValue);

                        let [x,setX] = useState(0);

        useEffect       

                        useEffect(callBack,[])

                            the 'callBack' is invoekd only once after the first render.
                            equivalent to componentDidMount


                        useEffect(callBack,[field1,field2])

                            the 'callBack' is invoekd after every render (excluding the first) and on detecting change of value in any of the fields.
                            
                            equivalent to componentDidUpdate
    
    Application Level State Management Using Redux
    -------------------------------------------------------------

        npm i redux react-redux

        redux is a state management tool. it holds and provides state to entire application as needed. 

            store               is an object that holds all the data related to an application
                                an app will have one and only one store

                                const myStore = createStore(myReducer);

            reducer             is any javascript method that receves the oldState and an action
                                and returns the modifiedState

                                const myReducer = (state, action) => {

                                    //operate on the state as demanded by the action

                                    return modifiedState;
                                }


            action              is an object that must have type and payload as fields.

                                const EMP_ADD_ACTION = { type:'ADD_EMP', emp };

                                const DEL_EMP_ACTION = { type:'DEL_EMP', id };

            dispatch            is a method provided by the redux which carries the action to the reducer.

        react-redux is a integration tool between react and redux.

            Provider            is a component used to wrap the store around teh root-component

                                <Provider store={myStore}>
                                    <App />
                                </Provider>

            useDispatch         is a hook used to receive the 'dispatch' function related to our reducer.

                                const dispatch = useDispatch();

            useSelector         is a hook used to retrive required data from the state held in the store.

                                let empsList = useSelector( state => state.emps );

                    store -------------------------------------------
                    ↑                           |  useSelector      |
                    |                           ↓                   | useSelector
                    |                       Component1              ↓
                    |                           |                  Component2
                    |                           | dispatch(action)  |
                    |                           |                   | dispatch(action)
                    |                           |                   |
                    |                           ↓                   ↓
                    reducer ←--------(action)------------(action)----

    create a fake rest-api using json-server
    -------------------------------------------------------------

        json-server is a thrid party tool that generates a fake rest-api 
        based on a .json file

        md adb-api
        cd adb-api
        npm init -y
        npm i json-server@0.17.4

        create 'start':'json-server --port 8888 --watch adb.json' in package.json

        create adb-api/adb.json with the hypoithetical data.

        npm start

    'axios' to make rest-api calls
    ------------------------------------------------------------

        npm i axios

        axios.get(url) : Promise
        axios.put(url,reqBody) : Promise
        axios.post(url,reqBody) : Promise
        axios.delete(url) : Promise

    integrating asynchronosu rest-api calls with redux using redux-thunk
    -------------------------------------------------------------------

        redux-thunk offers 'thunk' - a middleware to stream line data between asynchronous rest-api calls and redux reducer.

            npm i redux-thunk

        to apply thunk on a reducer and store

            const myStore = createStore(myReducer,applyMiddleware(thunk));

        in the presence of 'thunk' an action can be an object or a function.

        functions used as actions are called thunkActions and are provided with a 'dispatch' automatically.

                    store -------------------------------------------
                    ↑                           |  useSelector      |
                    |                           ↓                   | useSelector
                    |                       Component1              ↓
                    |                           |                  Component2
                    |                           | dispatch(action)  |
                    |                           |                   | dispatch(thunkAction)
                    |                           |                   |
                    |                           ↓                   ↓
                    |          |←-----(action)---               ----------[thunkAction]------------------
                    reducer←---|                                |                                       |
                               |←-----(actionIndicatingWait)----|                                       |
                               |                                |   call rest-api, then                 |
                               |←-----(actionCarringData)-------|       (i) we get data or              |
                               |←-----(actionCarringErr)--------|       (ii) we get an error            |
                                                                |                                       |
                                                                -----------------------------------------    
 
    React Routing

        npm i react-router react-router-dom 

            <BrowserRouter>

                <Header />

                <Routes>
                    <Route path="/" element={<C1 />} />
                    <Route path="/a" element={<C2 />} />
                    <Route path="/b" element={<C3 />} />
                    <Route path="/c/:pathVariable" element={<C4 />} />
                </Routes>

                <Footer />

            </BrowserRouter>

            <Link to"" ></Link>       instead of <a></a>

            <Navigate to="" />     