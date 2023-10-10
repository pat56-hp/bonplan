<div class="modal fade" id="modalEdit-{{ $categorie->id }}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modification de la categorie</h5>
                <button type="button" class="close" data-dismiss="modal"><span>×</span>
                </button>
            </div>
            <form action="{{ route('bonplan.categorie.update', $categorie->id) }}" method="post" class="">
                @csrf
                <div class="modal-body">
                    <div class="row m-t-xxl">
                        <div class="col-md-12">
                            <label for="name" class="form-label">Libéllé <span class="red">*</span></label>
                            <input type="text" name="libelle" value="{{ old('libelle', $categorie->libelle) }}" class="form-control @error('libelle') is-invalid @enderror" id="libelle" placeholder="Treichville">
                            @error('libelle')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                        </div>
                    </div>
                    <div class="row m-t-xxl" id="identity-section">
                        <div class="col-md-12">
                            <label for="photo" class="form-label">Icon <span class="red">*</span></label><br>
                            <input type="text" name="icon" value="{{ old('icon', $categorie->icon) }}" class="form-control @error('icon') is-invalid @enderror" id="icon" placeholder="icon_set_1_icon-86">
                            @error('icon')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                        </div>
                    </div>
                    <div class="row m-t-xxl">
                        <div class="col-md-12">
                            <label for="status" class="form-label">Statut <span class="red">*</span></label>
                            <select class="js-states form-control" id="status" name="status">
                                <option value="1" {{ old('status', $categorie->status) == 1 ? 'selected' : ''}}>Actif</option>
                                <option value="0" {{ old('status', $categorie->status) == 0 ? 'selected' : ''}}>Inactif</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><i class="fas fa-close"></i> Annuler</button>
                    <button type="submit" class="btn btn-primary"><i class="fas fa-save"></i> Enregistrer</button>
                </div>
            </form>
        </div>
    </div>
</div>
@push('js')
    <script>
        $("#image-{{$categorie->id}}").uploader({
            multiple: false,
            defaultValue: [

                {
                    name: "jQuery",
                    url: "{{$categorie->image}}"
                },

            ],
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
                            constole.log('ok')
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
    </script>
@endpush