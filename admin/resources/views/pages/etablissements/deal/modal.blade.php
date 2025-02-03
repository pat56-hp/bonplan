<div class="modal fade" id="modalAdd-{{$bonplan->id}}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Ajouter en deal</h5>
                <button type="button" class="close" data-dismiss="modal"><span>×</span>
            </div>
            <form action="{{ route('deal.store', $bonplan->id) }}" method="post" class="">
                @csrf
                <div class="modal-body">
                    <h5 class="text-center">Veuillez déterminer la période active du deal</h5>
                    <div class="row m-t-xxl">
                        <div class="col-md-12">
                            <label for="debut" class="form-label">Du <span class="red">*</span></label>
                            <input type="date" name="debut" value="{{ old('debut') }}" class="form-control @error('debut') is-invalid @enderror" id="debut">
                            @error('debut')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                        </div>
                    </div>
                    <div class="row m-t-xxl">
                        <div class="col-md-12">
                            <label for="fin" class="form-label">A <span class="red">*</span></label>
                            <input type="date" name="fin" value="{{ old('fin') }}" class="form-control @error('debut') is-invalid @enderror" id="fin">
                            @error('fin')
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