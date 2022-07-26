'use strict';


const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthorSelector = '.post-author';



function titleClickHandler(event){
  event.preventDefault();
  const clickedElement = this;
 

  /* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');


  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }

  /* [DONE] add class 'active' to the clicked link */

  clickedElement.classList.add('active');
  console.log('clickedElement:', clickedElement);

  /* [DONE] remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('.posts article.active');

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }

  /* [DONE] get 'href' attribute from the clicked link */

  const articleSelector = clickedElement.getAttribute('href');
  /*console.log(articleSelector);*/

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector(articleSelector);
  /*console.log(targetArticle);*/

  /* [DONE] add class 'active' to the correct article */

  targetArticle.classList.add('active');
  /*console.log('Article is visible');*/
}

function generateTitleLinks(customSelector = ''){
  /*console.log('Title Lists are just generated');*/

  /* remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';

  /* for each article */

  const articles = document.querySelectorAll(optArticleSelector  + customSelector);
  let html = '';

  for (let article of articles) {
    /* get the article id */

    const articleId = article.getAttribute('id');
    /*console.log(articleId);*/

    /* find the title element */

    
    /* get the title from the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* create HTML of the link */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log('HTML of link was created!');

    /* insert link into titleList */

    html = html + linkHTML;
    console.log(html);
  }

  titleList.innerHTML = html;

  const links = document.querySelectorAll('.titles a');
  console.log('what is it?');
  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
    console.log(link);
  }
}

generateTitleLinks();   

function generateTags(){
  /* find all articles */

  const articles = document.querySelectorAll(optArticleSelector);

  /* START LOOP: for every article: */

  for(let article of articles){

    /* find tags wrapper */

    const titleList = article.querySelector(optArticleTagsSelector);
    /*console.log(titleList);*/

    /* make html variable with empty string */

    let html = '';
    console.log(html);

    /* get tags from data-tags attribute */

    const articleTags = article.getAttribute('data-tags');
    console.log(articleTags);
    
    /* split tags into array */

    const articleTagsArray = articleTags.split(' ');
    /*console.log(articleTagsArray);*/

    /* START LOOP: for each tag */
    for(let tag of articleTagsArray){
      console.log(tag);
    
      /* generate HTML of the link */

      const tagLinkHTML ='<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';
      console.log(tagLinkHTML);

      /* add generated code to html variable */
      html = html + tagLinkHTML;
      console.log(html);
    
    /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */
    
    titleList.innerHTML = html; 

    /* END LOOP: for every article: */
  }
}


generateTags();




function tagClickHandler(event){
  /* prevent default action for this event */

  event.preventDefault();

  /* make new constant named "clickedElement" and give it the value of "this" */
  
  const clickedElement = this;
  console.log(clickedElement);

  /* make a new constant "href" and read the attribute "href" of the clicked element */

  const href = clickedElement.getAttribute('href');
  console.log(href);

  /* make a new constant "tag" and extract tag from the "href" constant */

  const tag = href.replace('#tag-', '');
  console.log(tag, tag);

  /* find all tag links with class active */

  const activeTagLink = document.querySelectorAll('a.active[href=^="#tag-"]');
  console.log(activeTagLink);

  /* START LOOP: for each active tag link */

  for(let activeTagLink of activeTagLinks){

    /* remove class active */

    activeTagLink.classList.remove('active');

  /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */

  const sameTagLinks = document.querySelectorAll('a[href="' + href + '"]');
  console.log(sameTagLinks);  

  /* START LOOP: for each found tag link */

  for(let sameTagLink of sameTagLinks){

    /* add class active */

    sameTagLinks.classList.add('active');
    console.log(sameTagLinks);

  /* END LOOP: for each found tag link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */

  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags(){
  /* find all links to tags */

  const allTagsLinks = document.querySelectorAll('a[href^="#tag-"]');

  /* START LOOP: for each link */
  for(let allTagsLink of allTagsLinks){
    
    /* add tagClickHandler as event listener for that link */

    allTagsLink.addEventListener('click', tagClickHandler);

  /* END LOOP: for each link */
  }
}

addClickListenersToTags();

function generateAuthors (){

  /* [NEW] create a new variable allAuthors with an empty array */
  let allAuthors = {};
  /*console.log(allAuthors);*/

  /* find all articles*/
  const articles = document.querySelectorAll(optArticleSelector);
  console.log(articles);
  /* START LOOP: for every article: */

  for (let article of articles){

    /* Find author wrapper */
  
    const authorWrapper = article.querySelector(optArticleAuthorSelector);
    console.log('authorWrapper:', authorWrapper);

    /* make html variable with empty string */

    let html = '';
    /*console.log(html);*/

    /* get author from data-author attrubite */

    const articleAuthor = article.getAttribute('data-author');
    console.log('articleAuthor:', articleAuthor);

    /*generate HTML of the link */

    const authorLinkHTML = '<li><a href="#author-'+ articleAuthor +'">' + articleAuthor +'</a></li>';
    console.log(authorLinkHTML);

    /* add generated code to html variable */

    html = html + authorLinkHTML + ' ';

    /*  insert HTML of all the links into the authors wrapper*/

    authorWrapper.innerHTML = authorLinkHTML;
    console.log('html:', html);

  /* END LOOP: for every article */
  }
}

generateAuthors();
