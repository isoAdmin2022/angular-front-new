import { Component, OnInit, TemplateRef  } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { PostService } from 'src/app/services/post.service';


export interface posts {
  id: string,
  title: string,
  body: string
}

@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrls: ['./list-blog.component.scss']
})

export class ListBlogComponent implements OnInit {

  isCollapsed = true;
  modalRef?: BsModalRef;
  postArray: posts [] = [];
  loadin = false;

  tittle: string = "";
  body: string = "";
  constructor(private modalService: BsModalService, private srvBlog: PostService) { }
  
  ngOnInit(): void {

    this.sendRequestPost();


  }


  obtenerPost()
  {
    console.log('obteniendo post');
  }

  operModal(){
    console.log('Open modal');
  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  createPost(){
    const value = {
      title: this.tittle,
      body :this.body
    }

    this.srvBlog.createPost(value).subscribe(result => {
      
      this.tittle = "";
      this.body = "";
      this.modalRef?.hide();
      console.log(result);
      this.loadin =  false;
      this.sendRequestPost();
      alert('La publicacion se realizo con exito');

    }, (err) => {
      console.log(err);
    })
  }


  sendRequestPost()
  {
    this.srvBlog.getAllPost().subscribe(result => {

      console.log(result);
      this.postArray = [];
      this.postArray = result.data;
      this.loadin = true;
      

    }, (err) => {

      console.log(err);

    });
  }

}
