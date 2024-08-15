export const getSuccessToastr = (success_text) => {
  toastr.success(success_text, 'Success', {positionClass: "toast-bottom-right", timeOut: 3000, fadeOut: 500})
}

export const getErrorToastr = (error_text) => {
  toastr.error(error_text, 'Error', {positionClass: "toast-bottom-right", timeOut: 3000, fadeOut: 500})
}

