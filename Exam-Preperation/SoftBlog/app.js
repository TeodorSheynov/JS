function solve(){
   let creatorElement=document.querySelector('section form #creator');
   let titleElement=document.querySelector('section form #title');
   let categoryElement=document.querySelector('section form #category');
   let contentElement=document.querySelector('section form #content');
   let postSection=document.querySelector('.site-content main section');
   let archiveSectionElement=document.querySelector('.site-content aside .archive-section ol')
   
   let arrayArchive=[];
   let createButton=document.getElementsByClassName('btn create')[0];


   createButton.addEventListener('click',(e)=>{
      e.preventDefault();
      let article=createArticle();

      postSection.appendChild(article);

      creatorElement.value='';
      titleElement.value='';
      categoryElement.value='';
      contentElement.value='';
   })
   function createArticle(){
      //1
      let article_Wrap1=document.createElement('article');
      //2
      let title_Created_Element=document.createElement('h1');
      title_Created_Element.textContent=titleElement.value;
      
      //3
      let category_Paragraph1=document.createElement('p');
      category_Paragraph1.textContent='Category:'
      let category_Paragraph1_Strong=document.createElement('strong');
      category_Paragraph1_Strong.textContent=categoryElement.value;
      //3.1 append
      category_Paragraph1.appendChild(category_Paragraph1_Strong);
      //3
      let creator_Paragraph2=document.createElement('p');
      creator_Paragraph2.textContent='Creator:';
      let creator_Paragraph2_Strong=document.createElement('strong');
      creator_Paragraph2_Strong.textContent=creatorElement.value;
      //3.1 append
      creator_Paragraph2.appendChild(creator_Paragraph2_Strong);
      //3
      let content_Paragraph3=document.createElement('p');
      content_Paragraph3.textContent=contentElement.value;
      //3
      let buttons_wrap_div=document.createElement('div');
      buttons_wrap_div.classList.add('buttons');
      //3.1
      let button_delete=document.createElement('button');
      button_delete.classList.add('btn','delete');
      button_delete.textContent='Delete';
      button_delete.addEventListener('click',()=>{
         let thisSection=button_delete.parentNode.parentNode;
         thisSection.remove();
      })
      buttons_wrap_div.appendChild(button_delete);
      //3.1
      let button_archive=document.createElement('button');
      button_archive.classList.add('btn','archive');
      button_archive.textContent='Archive';
      button_archive.addEventListener('click',()=>{
         let thisTitle=button_archive.parentNode.parentNode.querySelector('h1');
         let clearArticle=button_archive.parentNode.parentNode;

         arrayArchive.push(thisTitle.textContent);
         arrayArchive.sort((a,b)=>a.localeCompare(b));
         archiveSectionElement.innerHTML='';
         
         for (const title of arrayArchive) {
            let liElement=document.createElement('li');
            console.log(title)
            liElement.textContent=title;
            archiveSectionElement.appendChild(liElement);
         }
         console.log(arrayArchive);
         clearArticle.remove();
      })
      buttons_wrap_div.appendChild(button_archive);


      article_Wrap1.appendChild(title_Created_Element);
      article_Wrap1.appendChild(category_Paragraph1);
      article_Wrap1.appendChild(creator_Paragraph2);
      article_Wrap1.appendChild(content_Paragraph3);
      article_Wrap1.appendChild(buttons_wrap_div);

      return article_Wrap1;
   }
  }
