<div class="modal fade" id="modalAddCommodite" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Nouvelle commodité de divertissement</h5>
                <button type="button" class="close" data-dismiss="modal"><span>×</span>
                </button>
            </div>
            <form action="{{ route('etablissements.commodite.store') }}" method="post" class="">
                @csrf
                <div class="modal-body">
                    <div class="row m-t-xxl">
                        <div class="col-md-12">
                            <label for="name" class="form-label">Libéllé <span class="red">*</span></label>
                            <input type="text" name="libelle" value="{{ old('libelle') }}" class="form-control @error('libelle') is-invalid @enderror" id="libelle" placeholder="Wifi">
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
                            <input type="text" name="icon" value="{{ old('icon') }}" class="form-control @error('icon') is-invalid @enderror" id="icon" placeholder="icon_set_1_icon-86">
                            @error('icon')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror
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