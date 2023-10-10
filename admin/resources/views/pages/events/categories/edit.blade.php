<div class="modal fade" id="modalEdit-{{ $categorie->id }}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modification de la commune</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="{{ route('events.categorie.update', $categorie->id) }}" method="post" class="">
                @csrf
                <div class="modal-body">
                    <div class="row m-t-xxl">
                        <div class="col-md-12">
                            <label for="title" class="form-label">Titre <span class="red">*</span></label>
                            <input type="text" name="title" value="{{ old('title', $categorie->title) }}" class="form-control @error('title') is-invalid @enderror" id="title" placeholder="Atelier">
                            @error('title')
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
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                    <button type="submit" class="btn btn-primary">Enregistrer</button>
                </div>
            </form>
        </div>
    </div>
</div>
