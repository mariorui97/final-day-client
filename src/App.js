import { Routes, Route } from  "react-router-dom";
import MyNav from "./components/MyNav";
import TodoList from "./components/TodoList";
import {useState, useEffect, useContext} from 'react'
import axios from "axios";
import AddForm from "./components/AddForm";
import EditForm from "./components/EditForm"
import {useNavigate } from 'react-router-dom'
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import {API_URL} from './config'
import {UserContext} from './context/app.context'
import Chatbot from "./components/Chatbot";
import ChatPage from "./components/ChatPage";
import UserList from "./components/UserList";
import Lore from "./components/Lore";



function App(){
  
  const [todos, setTodos] = useState([])
  // this state stores the logged in user info  
  const [users, setUsers] = useState([])
  const {user, setUser} = useContext(UserContext)
  const [myError, setError] = useState(null)

  const [id, setId] = useState(null)
  // setting it to 'true' so that we can show a loading screen and make the user wait until this API finishes
  const [fetchingUser, setFetchingUser] = useState(true)
  
  // This hook is for us to redirect users to different urls
  const navigate = useNavigate()

  // This runs only --ONCE-- when the component is mounted
  useEffect(() => {

      const getData = async () => {   



          let response  = await axios.get(`${API_URL}/todos`,{withCredentials: true})
          setTodos(response.data)

          // -----------------------------------------------
          // we make the user requst here to know if the user is logged in or not
          try {
            let userResponse = await axios.get(`${API_URL}/user`,{withCredentials: true})
            setFetchingUser(false)
            setUser(userResponse.data)

            let responsee = await axios.get(`${API_URL}/users`, {withCredentials: true})
            setUsers(responsee.data)
            
          }
          catch(err){
            // the request will fail if the user is not logged in 
            setFetchingUser(false)
          }
      }
      getData()

  }, [])

  // Runs everytime 'todos' gets updates - a conditional did update
  useEffect(() => {
    navigate('/')
  }, [todos, user])

  function refreshPage() {
    window.location.reload(true);
  }

  const handleSubmit = async (event) => {
      event.preventDefault()
      
      let newTodo = {
        summonerName: event.target.summonerName.value,
        favChamps: event.target.favChamps.value,
        position: event.target.position.value,
        note: event.target.note.value
      }      

      // Pass an object as a 2nd param in POST requests
      let response = await axios.post(`${API_URL}/create`, newTodo, {withCredentials: true})
      setTodos([response.data, ...todos])     
      refreshPage()
  }
  
  const handleClickEdit = () => {
    
     todos.map((elem, i) => {
      return elem.userId[0]._id === user._id ? setId(elem._id) : null      
    })      
    }

  const handleEdit = async (event, id) => {
      event.preventDefault()
      
      let editedTodo = {
        summonerName: event.target.summonerName.value,
        favChamps: event.target.favChamps.value,
        position: event.target.position.value,
        note: event.target.note.value
      }     

      // 
      // Pass an object as a 2nd param in POST requests
      let response = await axios.patch(`${API_URL}/todos/${id}`, editedTodo, {withCredentials: true})
      // Update our state 'todos' with the edited todo so that the user see the upadted info without refrshing the page

      // We have the updated todo here     

      let updatedTodos = todos.map((elem) => {
          if (elem._id == id) {
              elem.summonerName = response.data.name
              elem.favChamps = response.data.favChamps
              elem.position = response.data.position
              elem.note = response.data.note
          }
          return elem
      })

      setTodos(updatedTodos)
     refreshPage()
  }

  
  const handleDelete = async (id) => {
    // make a request to the server to delete it from the database
    await axios.delete(`${API_URL}/todos/${id}`)

    // Update your state 'todos' and remove the todo that was deleted
    let filteredTodos = todos.filter((elem) => {
      return elem._id !== id
    })

    setTodos(filteredTodos)
  }

  const handleSignUp = async (event) => {
    event.preventDefault()
    try{
    let newUser = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value
    }
    //Don't forget to import axios
    await axios.post(`${API_URL}/signup`, newUser, {withCredentials: true}) 
     
    navigate('/signin')
  }
  catch(err){    
    setError(err.response.data.error)
  }
  } 



  const handleSignIn = async (event) => {
    event.preventDefault()
    try {
      let newUser = {
        email: event.target.email.value,
        password: event.target.password.value
      }
  
      let response = await axios.post(`${API_URL}/signin`, newUser, {withCredentials: true})
      
      setUser(response.data)
      setUsers([response.data, ...users])
      navigate('/')
      refreshPage()
    }
    catch(err){      
      setError(err.response.data.error)
    }
  }

  const handleLogout = async () => {
      await axios.post(`${API_URL}/logout`, {}, {withCredentials: true})
      setUser(null)
      navigate('/')
      refreshPage()
  }

  // Wait for the '/api/user' request to finish so that we know if the user is loggedin or not
  if (fetchingUser) {
    return <p>Loading user info. . . </p>
  }

  if (!todos.length) {
    return <h1>Todos fetching</h1>
  }

	return (
		<div>    
      <Chatbot />      
      <MyNav todos={todos} user={user} onLogout={handleLogout} id={id} handleClickEdit={handleClickEdit}/>  
      <Routes>
          <Route path="/" element={<TodoList todos={todos} user={user}/> } />
          <Route path='/users' element={<UserList users={users} user={user} />}/>
          <Route path="/add-form" element={<AddForm btnSubmit={handleSubmit}/> } />
          <Route path="/todo/:todoId/edit" element={<EditForm  btnEdit={handleEdit}/>} />
          <Route path="/signin" element={<SignIn myError={myError} onSignIn={handleSignIn} />}/>
          <Route path="/signup" element={<SignUp myError={myError} onSubmit={handleSignUp} />}/>
          <Route path="/chat/:chatId"  element={ <ChatPage user={user} />}/>
          <Route path="/lore"  element={<Lore/>}/>
      </Routes>
		</div>
	);
}

export  default App;