body{
    background-image: url(img/nube.jpg);
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
}

#app{
    display: grid;
    grid-auto-rows: minmax(150px, auto);
    /* grid-template-columns:  */
    height:100vh;
    background-image: none;
    color: #fff;
    justify-content: center;
    grid-gap: 1em;
    font-size: 20px;
    font-family: 'Oswald', sans-serif;
}

header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background: none;
    box-shadow: 0 4px 25px -22px black;
    z-index: 2;
} 
.holder{

}

.entry{
    background: rgba(59, 74, 107, .4);
}

#entryHolder{

}

#date{

}

#temp{

}

#content{

}

.headline {

}
.title{

}

/*  Basic Styling To Override Default For Basic HTML Elements */
label{
    display:block;
    font-size: 27px;
}

input{
    display:block;
    height: 60px;
    width: 320px;
    background:#fff;
    color: #f0d43a;
    font-size: 20px;
    font-family: 'Oswald', sans-serif;
    border: none;
}

button{
    width: 400px;
    height: 100px;
    background: #3b4a6b;
    color: #fff;
    font-size: 26px;
    font-family: 'Oswald', sans-serif;
    border: none;
    box-shadow: 2px 4px 5px #444;
}
h1{
    font-size: 36px;
}

textarea{
    background:#fff;
    color: #f0d43a;
    font-size: 20px;
    font-family: 'Oswald', sans-serif;
}
/* Reset style for HTML element on active to have no border*/
input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
}
/* Style for Placeholder Text*/
::placeholder { /* Firefox, Chrome, Opera */ 
    color: #f0d43a; 
    font-family: 'Oswald', sans-serif;

} 
  
:-ms-input-placeholder { /* Internet Explorer 10-11 */ 
    color: #f0d43a; 
    font-family: 'Oswald', sans-serif;

} 
  
::-ms-input-placeholder { /* Microsoft Edge */ 
    color: #f0d43a; 
    font-family: 'Oswald', sans-serif;

} 