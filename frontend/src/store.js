import {createStore, bindActionCreators} from 'redux';

const reducer = (currentState, action) => {
    if (action.type === "SET_LOG_IN") {
        return {
            ...currentState,
            loggedIn: true,
            showBlogList: false,
            showAbout: false,
            showProjectList: false,
            showHome: false,
            showPost: false,
            currentUser: action.currentUser
        }
    }

    if (action.type === "LOG_OUT") {
        return {
            ...currentState,
            loggedIn: false
        }
    }

    if (action.type === "SET_POSTS") {
        return {
            ...currentState,
            posts: action.posts
        }
    }

    if (action.type === "EDIT_CURRENT_POST") {
        return {
            ...currentState,
            currentPost: action.currentPost,
            editPost: true
        }
    }

    if (action.type === "ADD_POST") {
        return {
            ...currentState,
            posts: [...currentState.posts, action.post],
            newBlogPost: false
        }
    }

    if (action.type === "UPDATE_POST") {
        return {
            ...currentState,
            posts: currentState.posts.map(post => post.id === action.post.id ? 
                {...post, title: action.post.title, content: action.post.content} :
                post),
            editPost: false
        }
    }

    if (action.type === "DELETE_POST") {
        return {
            ...currentState,
            posts: currentState.posts.filter(post => post.id !== action.post.id),
            editPost: false
        }
    }

    if (action.type === "NEW_BLOG_TRUE") {
        return {
            ...currentState,
            newBlogPost: true
        }
    }

    if (action.type === "NEW_BLOG_FALSE") {
        return {
            ...currentState,
            newBlogPost: false
        }
    }

    if (action.type === "EDIT_BLOG_FALSE") {
        return {
            ...currentState,
            editPost: false
        }
    }

    if (action.type === "SHOW_BLOG_LIST") {
        return {
            ...currentState,
            showBlogList: true,
            showAbout: false,
            showProjectList: false,
            showHome: false,
            showExpertly: false,
            showPost: false
        }
    }

    if (action.type === "SHOW_PROJECT_LIST") {
        return {
            ...currentState,
            showBlogList: false,
            showAbout: false,
            showProjectList: true,
            showHome: false,
            showExpertly: false,
            showPost: false
        }
    }

    if (action.type === "SHOW_ABOUT") {
        return {
            ...currentState,
            showBlogList: false,
            showAbout: true,
            showProjectList: false,
            showHome: false,
            showExpertly: false,
            showPost: false
        }
    }

    if (action.type === "SHOW_HOME") {
        return {
            ...currentState,
            showBlogList: false,
            showAbout: false,
            showProjectList: false,
            showHome: true,
            showExpertly: false,
            showPost: false
        }
    }

    if (action.type === "SHOW_POST") {
        return {
            ...currentState,
            showBlogList: false,
            showAbout: false,
            showProjectList: false,
            showHome: false,
            showPost: true,
            showExpertly: false,
            currentPost: action.currentPost
        }
    }

    if (action.type === "SHOW_EXPERTLY") {
        return {
            ...currentState,
            showBlogList: false,
            showAbout: false,
            showProjectList: false,
            showHome: false,
            showPost: false,
            showExpertly: true,
            
        }
    }

    return currentState

}

let initialState = {
    currentUser: {},
    currentPost: {},
    showAbout: false,
    showBlogList: false,
    showPost: false,
    showProjectList: false,
    showExpertly: false,
    showSelectedBlog: false,
    newBlogPost: false,
    editPost: false,
    showHome: true,
    loggedIn: false,
    posts: [],

}

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

window.store = store

export default store