<div class="footer">
    <div class="copyright">
        <p class="text-center">Copyright &copy; <a href="{{ $setting->lien}}">{{ $setting->name }}</a> {{ date('Y') }}</p>
    </div>
</div>
<!-- #/ footer -->
</div>
<!-- Common JS -->
<script src="{{ asset('plugins/common/common.min.js') }}"></script>
<!-- Custom script -->
<script src="{{ asset('main/js/custom.min.js') }}"></script>
<script src="{{ asset('main/js/modernizr-3.6.0.min.js') }}"></script>
<!-- Chartjs chart -->
<script src="{{ asset('plugins/chartjs/Chart.bundle.js') }}"></script>
<!-- Custom dashboard script -->
<script src="{{ asset('main/js/dashboard-1.js') }}"></script>

<script src="{{ asset('plugins/select2/select2.full.min.js') }}"></script>
<script src="{{ asset('plugins/select2/select2-init.js') }}"></script>
<script src="{{ asset('plugins/bootstrap-mask/jasny-bootstrap.min.js') }}"></script>
<script src="{{ asset('plugins/bootstrap-touchpin/jquery.bootstrap-touchspin.min.js') }}"></script>
<script src="{{ asset('plugins/bootstrap-touchpin/bootstrap-touchpin-init.js') }}"></script>
<script src="{{ asset('plugins/bootstrap-tagsinput/bootstrap-tagsinput.min.js') }}"></script>
<script src="{{ asset('plugins/bootstrap-tagsinput/bootstrap-tagsinput-init.js') }}"></script>
<script src="{{ asset('plugins/switchery/switchery.min.js') }}"></script>
<script src="{{ asset('plugins/switchery/switchery-init.js') }}"></script>
<script src="{{asset('build/js/intlTelInput.js')}}"></script>
<script src="{{ asset('plugins/tables/js/jquery.dataTables.min.js') }}"></script>
<script src="{{ asset('plugins/tables/js/datatable/dataTables.bootstrap4.min.js') }}"></script>
<script src="{{ asset('plugins/tables/js/datatable-init/datatable-basic.min.js') }}"></script>
<script src="{{asset('assets/js/file-uploader.js')}}"></script>
<script src="{{ asset('/plugins/bootstrap-tagsinput/bootstrap-tagsinput.min.js')}}"></script>
<script src="{{ asset('/plugins/switchery/switchery.min.js')}}"></script>
<script src="{{ asset('plugins/clockpicker/dist/jquery-clockpicker.min.js')}}"></script>
<!-- Toastr -->
<script src="{{ asset('plugins/toastr/js/toastr.min.js')}}"></script>

@stack('js')

<script>

    $(document).ready(function() {
        $("#client").on('click', function(){
            $('#identity-section').hide()
        })

        $("#responsable").on('click', function(){
            $('#identity-section').show()
        })

        $('select').select2();

        $('#photos').uploader({
            ajaxConfig: {
                url: "{{ route('imageStorage') }}",
                method: "post",
                paramsBuilder: function (uploaderFile) {
                    let form = new FormData();
                    form.append("file", uploaderFile.file)
                    form.append("_token", "{{ csrf_token() }}")
                    console.log(form)
                    return form
                },
                ajaxRequester: function (config, uploaderFile, progressCallback, successCallback, errorCallback) {
                    $.ajax({
                        url: config.url,
                        contentType: false,
                        processData: false,
                        method: config.method,
                        data: config.paramsBuilder(uploaderFile),
                        success: function (response) {
                            successCallback(response)
                            $('.errorPhoto').text('')
                        },
                        error: function (response) {
                            console.log("Error", response)
                            errorCallback("Error")

                            let msg = response.responseJSON.message
                            sendNotification(msg, 'Erreur')
                        },
                        xhr: function () {
                            let xhr = new XMLHttpRequest();
                            xhr.upload.addEventListener('progress', function (e) {
                                let progressRate = (e.loaded / e.total) * 100;
                                progressCallback(progressRate)
                            })
                            return xhr;
                        }
                    })
                },
                responseConverter: function (uploaderFile, response) {
                    console.log(response)
                    return {
                        url: response.file,
                        name: null,
                    }
                },
            },
        })

        $('#photo').uploader({
            ajaxConfig: {
                url: "{{ route('imageStorage') }}",
                method: "post",
                paramsBuilder: function (uploaderFile) {
                    let form = new FormData();
                    form.append("file", uploaderFile.file)
                    form.append("_token", "{{ csrf_token() }}")
                    console.log(form)
                    return form
                },
                ajaxRequester: function (config, uploaderFile, progressCallback, successCallback, errorCallback) {
                    $.ajax({
                        url: config.url,
                        contentType: false,
                        processData: false,
                        method: config.method,
                        data: config.paramsBuilder(uploaderFile),
                        success: function (response) {
                            successCallback(response)
                            $('.errorPhoto').text('')
                        },
                        error: function (response) {
                            console.log("Error", response)
                            errorCallback("Error")

                            let msg = response.responseJSON.message
                            sendNotification(msg, 'Erreur')
                        },
                        xhr: function () {
                            let xhr = new XMLHttpRequest();
                            xhr.upload.addEventListener('progress', function (e) {
                                let progressRate = (e.loaded / e.total) * 100;
                                progressCallback(progressRate)
                            })
                            return xhr;
                        }
                    })
                },
                responseConverter: function (uploaderFile, response) {
                    console.log(response)
                    return {
                        url: response.file,
                        name: null,
                    }
                },
            },
        })

        $('#galerie').uploader({
            multiple: true,
            ajaxConfig: {
                url: "{{ route('imageStorage') }}",
                method: "post",
                paramsBuilder: function (uploaderFile) {
                    let form = new FormData();
                    form.append("file", uploaderFile.file)
                    form.append("_token", "{{ csrf_token() }}")
                    console.log(form)
                    return form
                },
                ajaxRequester: function (config, uploaderFile, progressCallback, successCallback, errorCallback) {
                    $.ajax({
                        url: config.url,
                        contentType: false,
                        processData: false,
                        method: config.method,
                        data: config.paramsBuilder(uploaderFile),
                        success: function (response) {
                            successCallback(response)
                            $('.errorGalerie').text('')
                        },
                        error: function (response) {
                            console.log("Error", response)
                            errorCallback("Error")

                            let msg = response.responseJSON.message
                            sendNotification(msg, 'Erreur')
                        },
                        xhr: function () {
                            let xhr = new XMLHttpRequest();
                            xhr.upload.addEventListener('progress', function (e) {
                                let progressRate = (e.loaded / e.total) * 100;
                                progressCallback(progressRate)
                            })
                            return xhr;
                        }
                    })
                },
                responseConverter: function (uploaderFile, response) {
                    console.log(response)
                    return {
                        url: response.file,
                        name: null,
                    }
                },
            },
        })

        $('#eventphoto').uploader({
            ajaxConfig: {
                url: "{{ route('events.storeimg') }}",
                method: "post",
                paramsBuilder: function (uploaderFile) {
                    let form = new FormData();
                    form.append("file", uploaderFile.file)
                    form.append("_token", "{{ csrf_token() }}")
                    console.log(form)
                    return form
                },
                ajaxRequester: function (config, uploaderFile, progressCallback, successCallback, errorCallback) {
                    $.ajax({
                        url: config.url,
                        contentType: false,
                        processData: false,
                        method: config.method,
                        data: config.paramsBuilder(uploaderFile),
                        success: function (response) {
                            successCallback(response)
                            $('.errorPhoto').text('')
                        },
                        error: function (response) {
                            console.log("Error", response)
                            errorCallback("Error")

                            let msg = response.responseJSON.message
                            sendNotification(msg, 'Erreur')
                        },
                        xhr: function () {
                            let xhr = new XMLHttpRequest();
                            xhr.upload.addEventListener('progress', function (e) {
                                let progressRate = (e.loaded / e.total) * 100;
                                progressCallback(progressRate)
                            })
                            return xhr;
                        }
                    })
                },
                responseConverter: function (uploaderFile, response) {
                    console.log(response)
                    return {
                        url: response.file,
                        name: null,
                    }
                },
            },
        })

        $('.photo_profile').uploader({
            ajaxConfig: {
                url: "{{ route('imageUserStorage') }}",
                method: "post",
                paramsBuilder: function (uploaderFile) {
                    let form = new FormData();
                    form.append("file", uploaderFile.file)
                    form.append("_token", "{{ csrf_token() }}")
                    console.log(form)
                    return form
                },
                ajaxRequester: function (config, uploaderFile, progressCallback, successCallback, errorCallback) {
                    $.ajax({
                        url: config.url,
                        contentType: false,
                        processData: false,
                        method: config.method,
                        data: config.paramsBuilder(uploaderFile),
                        success: function (response) {
                            successCallback(response)
                        },
                        error: function (response) {
                            console.log("Error", response)
                            errorCallback("Error")

                            let msg = response.responseJSON.message
                            sendNotification(msg, 'Erreur')
                        },
                        xhr: function () {
                            let xhr = new XMLHttpRequest();
                            xhr.upload.addEventListener('progress', function (e) {
                                let progressRate = (e.loaded / e.total) * 100;
                                progressCallback(progressRate)
                            })
                            return xhr;
                        }
                    })
                },
                responseConverter: function (uploaderFile, response) {
                    console.log(response)
                    return {
                        url: response.file,
                        name: null,
                    }
                },
            },
        })
    });





    @if(Session::has('type') )
        sendNotification('{{ Session::get('message') }}', '{{ Session::get('type') == 'alert-success' ? 'success' : 'error' }}')
    @endif

    function sendNotification(message, type) {
        let messageType = type === 'success' ? 'Succès' : 'Erreur';

        const commonOptions = {
            timeOut: 5e3,
            closeButton: true,
            debug: false,
            newestOnTop: true,
            progressBar: true,
            positionClass: 'toast-top-right',
            preventDuplicates: true,
            onclick: null,
            showDuration: '1000',
            hideDuration: '1000',
            extendedTimeOut: '1000',
            showEasing: 'swing',
            hideEasing: 'linear',
            showMethod: 'fadeIn',
            hideMethod: 'fadeOut',
            tapToDismiss: false,
        };

        if (type === 'success') {
            toastr.success(message, messageType, commonOptions);
        } else {
            toastr.error(message, messageType, commonOptions);
        }
    }

</script>

</body>

</html>