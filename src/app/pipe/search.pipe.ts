import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(usersList: any[], searchTerm: string): any {
    if (!usersList) return [];

    if (!searchTerm) return usersList;

    searchTerm = searchTerm.trim();

    let filteredUser = usersList.filter(user => {
      return (user.firstName + user.lastName).toLowerCase().includes(searchTerm.toLowerCase());
    });

    return filteredUser;
  }

}
