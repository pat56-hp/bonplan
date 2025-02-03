<div class="modal fade" id="modalAdd" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Nouvelle catégorie d'évènement</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="{{ route('events.categorie.store') }}" method="post" class="">
                @csrf
                <div class="modal-body">
                    <div class="row m-t-xxl">
                        <div class="col-md-12">
                            <label for="title" class="form-label">Titre <span class="red">*</span></label>
                            <input type="text" name="title" value="{{ old('title') }}" class="form-control @error('title') is-invalid @enderror" id="title" placeholder="Atelier">
                            @error('title')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror
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