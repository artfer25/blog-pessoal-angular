import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByTitle',
  standalone: true
})
export class FilterByTitlePipe implements PipeTransform {
  transform(posts: any[], filtro: string): any[] {
    if (!filtro) return posts;
    return posts.filter(p => p.title.toLowerCase().includes(filtro.toLowerCase()));
  }
}
