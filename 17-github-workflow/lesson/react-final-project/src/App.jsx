
import './App.css'
import Header from './components/Header'


// clone repo 
// main::
// 1. in main branch, git pull origin main
// 2. create your own branch starting with feature name and ends with yourname
// 3. finished with your feature, git add . | git commit -m "" | git push origin branchname
// 4. on the github , make a pull reuqest from your branch to main branch and add reviewer.
// 5.checkout to main branch and start again from 1 step:



//reviewer 
//how to reveiw others code
//1. git fetch (to get updated info about branches on github)
//2. git branch -a
//3. git checkout origin/branchname
//4. run your application and everything is okay
//5. on github, open pull request ,click on review changes , 
// change code
// approved changes.
// review again code

//6. merge that branch into main branch
//7. start again from main: 1 step





function App() {
  

  return (
    <>
     <Header/>
    </>
  )
}

export default App
