import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'dateConvert'
})
export class TimeStampConvertPipe implements PipeTransform {
    private getOrdinal(day: number): string {
        if (day > 3 && day < 21) return 'th'; // exceptions for 11th, 12th, 13th
        switch (day % 10) {
          case 1: return 'st';
          case 2: return 'nd';
          case 3: return 'rd';
          default: return 'th';
        }
      }
    
      transform(value: string): string {
        if (!value) return '';
        const date = new Date(value);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
        
        const dayWithOrdinal = `${day}${this.getOrdinal(day)}`;
        
        return `${dayWithOrdinal} ${month} ${year}`;
      }
}