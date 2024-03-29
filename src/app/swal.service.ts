import {Injectable} from "@angular/core";
import swal from "sweetalert2";
@Injectable({
    providedIn: 'root'
})
export class SwalService {

    showSwal(type,message) {
        if (type == "basic") {
            swal.fire({
                title: message,
                buttonsStyling: false,
                customClass: {
                    confirmButton: "btn btn-success"
                }
            })
        } else if (type == "title-and-text") {
            swal.fire({
                title: "Here's a message!",
                text: "It's pretty, isn't it?",
                buttonsStyling: false,
                customClass: {
                    confirmButton: "btn btn-info"
                }
            })
        } else if (type == "success-message") {
            swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                buttonsStyling: false,
                customClass: {
                    confirmButton: "btn btn-success",
                },
                icon: "success"
            })
        } else if (type == "warning-message-and-confirmation") {
            swal
                .fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    customClass: {
                        cancelButton: "btn btn-danger",
                        confirmButton: "btn btn-success mr-1",
                    },
                    confirmButtonText: "Yes, delete it!",
                    buttonsStyling: false
                })
                .then(result => {//subscribe
                    if (result.value) {
                        swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success",
                            customClass: {
                                confirmButton: "btn btn-success",
                            },
                            buttonsStyling: false
                        });
                    }
                })
        } else if (type == "warning-message-and-cancel") {
            swal
                .fire({
                    title: "Are you sure?",
                    text: "You will not be able to recover this imaginary file!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonText: "Yes, delete it!",
                    cancelButtonText: "No, keep it",
                    customClass: {
                        confirmButton: "btn btn-success mr-1",
                        cancelButton: "btn btn-danger",
                    },
                    buttonsStyling: false
                })
                .then(result => {
                    if (result.value) {
                        swal.fire({
                            title: "Deleted!",
                            text: "Your imaginary file has been deleted.",
                            icon: "success",
                            customClass: {
                                confirmButton: "btn btn-success",
                            },
                            buttonsStyling: false
                        })
                    } else {
                        swal.fire({
                            title: "Cancelled",
                            text: "Your imaginary file is safe :)",
                            icon: "error",
                            customClass: {
                                confirmButton: "btn btn-info",
                            },
                            buttonsStyling: false
                        });
                    }
                });
        } else if (type == "custom-html") {
            swal.fire({
                title: "HTML example",
                buttonsStyling: false,
                customClass: {
                    confirmButton: "btn btn-success mr-1",
                },
                html:
                    "You can use <b>bold text</b>, " +
                    '<a href="https://github.com">links</a> ' +
                    "and other HTML tags"
            });
        } else if (type == "auto-close") {
            swal.fire({
                title: "Auto close alert!",
                text: "I will close in 2 seconds.",
                timer: 2000,
                showConfirmButton: false
            });
        }
    }
}