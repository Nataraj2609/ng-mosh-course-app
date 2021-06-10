import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler } from "@angular/core";
import { throwError } from "rxjs";

export class GlobalErrorHandler implements ErrorHandler {
    
    handleError(error: HttpErrorResponse) {
        let errorMessage = 'Unknown Error Occured';
        if (error.error instanceof ErrorEvent)
            errorMessage = 'Client Side Error has occured' + `\nError: ${error.error.message}`;
        else {
            switch (error.status) {
                case 404: {
                    errorMessage = 'GLobal ERROR Server side Error -- Not Found' + `\nError Code ${error.status}\nMessage: ${error.message}`;
                    break;
                }
                case 403: {
                    errorMessage = 'Server side Error -- Access Denied' + `\nError Code ${error.status}\nMessage: ${error.message}`;
                    break;
                }
                case 500: {
                    errorMessage = 'Server side Error -- Internal Server Error' + `\nError Code ${error.status}\nMessage: ${error.message}`;
                }
                // default: {
                //   errorMessage = 'Server side Error' + `\nError Code ${error.status}\nMessage: ${error.message}`;
                //     return `Unknown Server Error: ${error.message}`;
                // }

            }
        }
        window.alert(errorMessage);
        //  return throwError;
    }
}