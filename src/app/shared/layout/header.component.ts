import { Component, OnInit } from '@angular/core';

import { ArticlesService, User, UserService } from '../../core';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  title: any;
  constructor(
    private userService: UserService,
    private articleService : ArticlesService,
  ) {}

  currentUser: User;

  ngOnInit() {
    this.userService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
      }
    );
  }
  
  search(title : string) {
    this.articleService.search(this.title)
      .subscribe(comments => this.title = this.title);
  }
  
}
