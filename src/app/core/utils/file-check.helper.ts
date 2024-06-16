import { Observable, Observer } from "rxjs";

export const isImageFile = function (file: File): boolean {
    const acceptedImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
    return acceptedImageTypes.includes(file.type);
}


export const  generateImagePreview = (file: File) : Observable < string | ArrayBuffer | null >  => {
    return new Observable((observer: Observer<string | ArrayBuffer | null>) => {
        const reader = new FileReader();
        reader.onload = () => {
            observer.next(reader.result);
            observer.complete();
        };
        reader.onerror = (error) => {
            observer.error(error);
        };
        reader.readAsDataURL(file);
    });
}