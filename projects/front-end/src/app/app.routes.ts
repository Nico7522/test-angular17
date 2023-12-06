import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: "books",
    loadChildren: () => import("../../../book-feature/src/lib/book.routes").then(item => item.booksRoutes),
    data: {preload: true}
}];
