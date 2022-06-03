/**** 
* AMP Framework Reset
*****/
@font-face {
    font-family: "FontAwesome";
    src: url("https://somedomain.org/fonts/fontawesome-webfont.ttf");
  }

  body {
    font-family: "FontAwesome";
    content="";
  }
    body{ font-family: Ubuntu; sans-serif; font-size: 16px; line-height:1.4; }
    ol, ul{ list-style-position: inside }
    p, ol, ul, figure{ margin: 0 0 1em; padding: 0; }
    a, a:active, a:visited{ color:#ed1c24; text-decoration: none }
    a:hover, a:active, a:focus{}
    pre{ white-space: pre-wrap;}
    .left{
       /* float:left; */
       margin-top:10px;
    }
    .right{float:right}
    .hidden{ display:none }
    .clearfix{ clear:both }
    blockquote{ background: #f1f1f1; margin: 10px 0 20px 0; padding: 15px;}
    blockquote p:last-child {margin-bottom: 0;}
    .amp-wp-unknown-size img {object-fit: contain;}
    .amp-wp-enforced-sizes{ max-width: 100% }
    /* Image Alignment */
    .alignright {
        float: right;
    }
    .alignleft {
        float: left;
    }
    .aligncenter {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    amp-iframe { max-width: 100%; margin-bottom : 20px; }

    /* Captions */
    .wp-caption {
        padding: 0;
    }
    .wp-caption-text {
        font-size: 12px;
        line-height: 1.5em;
        margin: 0;
        padding: .66em 10px .75em;
        text-align: center;
    }

    /* AMP Media */
    amp-iframe,
    amp-youtube,
    amp-instagram,
    amp-vine {
        margin: 0 -16px 1.5em;
    }
    amp-carousel > amp-img > img {
        object-fit: contain;
    }
    /****
* Acordion
*****/
#img-acordion{
    width:20px;
    height:auto;
    margin:auto;
    float:left;
 
}
.acordion-cursos{
   margin-bottom:10px;
}
.acordion-cursos h4{
    text-align:center;
    padding: 5px;
}
#acordion-saiba-mais h3{
text-align:center;
font-weight:bold;
font-size:30px;
margin
}
#acordion-saiba-mais h3:before{
    content:'>';

}
#acordion-saiba-mais h3:after{
content:'<';
}
.acordion-cursos p{
    text-align:center;
}
.depoimentos-feat{
    border: 1px solid #666;
    border-radius:5px;
}
.depoimentos-feat .feat-blk img{
    width:33%;
}
#p-titulo-secao{
    line-height: 28px;
    padding-bottom: 10px;
    margin-top: 15px;
}
#p-titulo-secao #botao-entrar-amp{
    
    margin-top: 5px;
}
.depoimentos-feat .feat-blk h3{
    margin:0px;
}
#p-quote{
    color: #dd5a5a;
    font-size:40px;
}
#slider-section{
    position:relative;
}


/***

SLIDER
*/
#slider-amp{
    
}

.slider-home-btn{
    position: absolute;
    bottom: 10%;
    z-index: 99;
    background-color: #ef6c2b;
    padding: 3px 47px 3px 47px;
    border-radius: 21px;
    left: 25%;
    right: 25%;
    font-size:14px;
    color:#fff;
    width:25%;
    height:20px;
}



.slider-h{
    position: absolute;
    bottom: 22%;
    z-index: 999;
    left: 25%;
    right: 25%;
    font-size:15px;
    color:#fff;
}
#slider-triplo amp-img{
    width:30%;
    float:left;
    display:flex;
    justify-content:space-between;
    margin:2px;
}
#slider-triplo .amp-carousel-slide{
    height:auto;
}
/****
    MENU
*/
#botao-entrar-amp{
    border-radius: 5px;
    border: 2px solid #ed1c24;
    padding:5px;
}











/****
* Container
*****/
.container {
    max-width: 600px;
    margin: 0 auto;
    padding: 0px 10px;
}

/****
* AMP Sidebar
*****/
    amp-sidebar {
        width: 250px;
    }

    /* AMP Sidebar Toggle button */
    .amp-sidebar-button{
        position:relative;
    }
    .amp-sidebar-toggle  {
    }
    .amp-sidebar-toggle span  {
        display: block;
        height: 2px;
        margin-bottom: 5px;
        width: 22px;
        background: #000;
    }
    .amp-sidebar-toggle span:nth-child(2){
        top: 7px;
    }
    .amp-sidebar-toggle span:nth-child(3){
        top:14px;
    }

    /* AMP Sidebar close button */
    .amp-sidebar-close{
        background: #333;
        display: inline-block;
        padding: 5px 10px;
        font-size: 12px;
        color: #fff;
    }

/****
* AMP Navigation Menu with Dropdown Support
*****/
    .toggle-navigation ul{
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: inline-block;
        width: 100%
    }
    .toggle-navigation ul li{
        font-size: 13px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.11);
        padding: 11px 0px;
        width: 25%;
        float: left;
        text-align: center;
        margin-top: 6px
    }
    .toggle-navigation ul ul{
        display: none
    }
    .toggle-navigation ul li a{
        color: #eee;
        padding: 15px;
    }
    .toggle-navigation{
        display: none;
        background: #444;
    }


/**** 
* Header
*****/
.amp-logo {
    width:100px !important;
    height:100px;
    margin-left: auto;
    margin-right: auto;
}
#amp-logo-img{
    width:100px !important;
    height:100px;
}
    .header h1{
        font-size: 1.5em;
    }
    .header .right{
        margin: 16px 5px 0px 5px;
    }
    .amp-phone, .amp-social, .amp-sidebar-button{
        display:inline-flex 
    }
    .amp-phone{
        top: 4px;
    }
    .header .amp-social{
        margin: 0px 19px;
    }
    .amp-sidebar-button{
        top: 6px;
    }

/****
    SLIDER
*/    

#slider-amp{
    width:100%;
}

/****
    CURSOS
*/ 
#area-curso .feat-blk{
    padding:0px;
}
#area-curso .feat-blk p{
    color:#fff;
    font-size:20px;
}
#area-curso .feat-blk h3{
    display:none;
}
#area-curso .fe_btn{
    border: 2px solid #fff;
    margin-bottom: 10px;
}
/**** 
* Loop
*****/
    .loop-post{
        display: inline-block;
        width: 100%;
        margin: 6px 0px;
    }
    .loop-post .loop-img{
        float: left;
        margin-right: 15px;
    }
    .loop-post h2{
        font-size: 1.2em;
        margin: 0px 0px 8px 0px;
    }
    .loop-post p{
        font-size: 14px;
        color: #333;
        margin-bottom:6px;
    }
    .loop-post ul{
        list-style-type: none;
        display: inline-flex;
        margin: 0px;
        font-size: 14px;
        color: #666;
    }
    .loop-post ul li{
        margin-right:2px;
    }
    .loop-date{
        font-size:12px;
    }


/****
* Single
*****/
    /** Related Posts **/
    .amp-related-posts ul{
        list-style-type:none;
    }
    .amp-related-posts ul li{
        display: inline-block;
        line-height: 1.3;
        margin-bottom: 5px;
    }
    .amp-related-posts amp-img{
        float: left;
        width: 100px;
        margin: 0px 10px 0px 0px;
    }


/**** 
* Comments
*****/
	.comments_list ul{
	    margin:0;
	    padding:0
	}
	.comments_list ul.children{
	    padding-bottom:10px;
		margin-left: 4%;
		width: 96%;
	}
	.comments_list ul li p{
        margin: 0;
        font-size: 14px;
        clear: both;
        padding-top: 5px;
	}
    .comments_list ul li .says{
        margin-right: 4px;
    }
	.comments_list ul li .comment-body{
	    padding: 10px 0px 15px 0px;
	}
	.comments_list li li{
	    margin: 20px 20px 10px 20px;
	    background: #f7f7f7;
	    box-shadow: none;
	    border: 1px solid #eee;
	}
	.comments_list li li li{
	    margin:20px 20px 10px 20px
	}
	.comment-author{ float:left }


/**** 
* Footer
*****/
    .footer{
        padding: 30px 0px 20px 0px;
        font-size: 12px;
        text-align: center;
    }


/****
* RTL Styles
*****/
    <?php  if( is_rtl() ) {?> <?php } ?>
