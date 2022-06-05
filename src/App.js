import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import { PostsLists } from './features/posts/PostsLists';
import { AddPostForm } from './features/posts/AddPostForm';
import { SinglePostPage } from './features/posts/SinglePostPage';
import { EditPostForm } from './features/posts/EditPostForm';
import {UsersList} from './features/users/UserList';
import {UserPage} from './features/users/UserPage';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <AddPostForm />
                <PostsLists />
              </>
            )}
          />
          <Route exact path='/posts/:postId' component={SinglePostPage} />
          <Route exact path='/editPost/:postId' component={EditPostForm} />
          <Route exact path="/users" component={UsersList} />
          <Route exact path="/users/:userId" component={UserPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
