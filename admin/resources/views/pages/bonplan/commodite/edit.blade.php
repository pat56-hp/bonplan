<div class="modal fade" id="modalEdit-{{ $commodite->id }}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modification de la commodite</h5>
                <button type="button" class="close" data-dismiss="modal"><span>×</span>
                </button>
            </div>
            <form action="{{ route('bonplan.commodite.update', $commodite->id) }}" method="post" class="">
                @csrf
                <div class="modal-body">
                    <div class="row m-t-xxl">
                        <div class="col-md-12">
                            <label for="name" class="form-label">Libéllé <span class="red">*</span></label>
                            <input type="text" name="libelle" value="{{ old('libelle', $commodite->libelle) }}" class="form-control @error('libelle') is-invalid @enderror" id="libelle" placeholder="Plasma">
                            @error('libelle')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                        </div>
                    </div>
                    <div class="row m-t-xxl">
                        <div class="col-md-12">
                            <label for="icon" class="form-label">Icon <span class="red">*</span></label>
                            <input type="text" name="icon" value="{{ old('icon', $commodite->icon) }}" class="form-control @error('icon') is-invalid @enderror" id="icon" placeholder="">
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
                            <select class="js-states form-control w-100" id="status" name="status">
                                <option value="1" {{ old('status', $commodite->status) == 1 ? 'selected' : ''}}>Actif</option>
                                <option value="0" {{ old('status', $commodite->status) == 0 ? 'selected' : ''}}>Inactif</option>
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
