 
 </div>
 <!-- Javascripts -->
 <script src="{{ asset('assets/plugins/jquery/jquery-3.5.1.min.js')}}"></script>
<script src="{{ asset('assets/plugins/bootstrap/js/popper.min.js')}}"></script>
<script src="{{ asset('assets/plugins/bootstrap/js/bootstrap.min.js')}}"></script>
 <script src="{{ asset('assets/plugins/perfectscroll/perfect-scrollbar.min.js')}}"></script>
 <script src="{{ asset('assets/plugins/pace/pace.min.js')}}"></script>
<script src="{{ asset('assets/plugins/highlight/highlight.pack.js')}}"></script>


<script src="{{ asset('assets/plugins/select2/js/select2.full.min.js')}}"></script>
<script src="{{ asset('assets/js/pages/settings.js')}}"></script>

<script src="{{ asset('assets/plugins/datatables/datatables.min.js')}}"></script>
<script src="{{ asset('assets/js/pages/datatables.js')}}"></script>
<script src="{{ asset('assets/plugins/summernote/summernote-lite.min.js')}}"></script>
<script src="{{ asset('assets/js/pages/text-editor.js')}}"></script>

<script src="{{asset('assets/js/file-uploader.js')}}"></script>
<script src="{{ asset('assets/js/main.min.js')}}"></script>
<script src="{{ asset('assets/js/custom.js')}}"></script>
<script src="{{asset('build/js/intlTelInput.js')}}"></script>
<script src="{{asset('flag/js/jquery.flagstrap.js')}}"></script>


<script>
 $('#flag').flagStrap();
   $(document).ready(function(){
     $("#client").on('click', function(){
       $('#identity-section').hide()
     })

    $("#responsable").on('click', function(){
       $('#identity-section').show()
    })

       $('select').select2();
   });
</script>

<script type="application/javascript">

    $(document).ready(function() {

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
                            console.error("Error", response)
                            errorCallback("Error")

                            let msg = response.responseJSON.message
                            console.log(msg)
                            $('.errorPhoto').text('Erreur: ' +msg)
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
                            console.error("Error", response)
                            errorCallback("Error")

                            let msg = response.responseJSON.message
                            console.log(msg)
                            $('.errorGalerie').text('Erreur: ' +msg)
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
                            console.error("Error", response)
                            errorCallback("Error")

                            let msg = response.responseJSON.message
                            console.log(msg)
                            $('.errorPhoto').text('Erreur: ' +msg)
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


</script>


@stack('js')
</body>

</html>