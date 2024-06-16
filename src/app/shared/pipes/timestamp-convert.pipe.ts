import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'dateConvert'
})
export class TimeStampConvertPipe implements PipeTransform {
    transform(value: string): string {
        if (!value) return '';
        const date = new Date(value);
        const formattedDate = date.toLocaleDateString();
        const formattedTime = date.toLocaleTimeString();
        const currentDate = new Date().toLocaleDateString()
        const dateToShow = currentDate === formattedDate ? "Today" : formattedDate;

        return `${formattedTime} , ${dateToShow}`;
    }
}