import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PageService {
  currentPage: number = 1;
  currentuid: string = "";

  setCurrentPage(page: number): void {
    this.currentPage = page;
  }

  getCurrentPage(): number {
    return this.currentPage;
  }

  setCurrentUid(uid: string): void {
    this.currentuid = uid;
  }

  getCurrentUid(): string {
    return this.currentuid;
  }
}
