<div class="main_title">
    <h2>Catégories de <span>Plans</span></h2>
    <p>
        Retrouver vos endroits de divertissements préférés par catégorie
    </p>
</div>
<div class="row add_bottom_45">
    <div class="col-lg-4 other_tours">
        <ul>
            @foreach($categories->slice(0, 6) as $category)
            <li>
                <a href="#"><i class="{{ $category->icon }}"></i>{{ ucfirst($category->libelle) }}<span class="other_tours_price">{{ $category->bonplans_count }}</span></a>
            </li>
            @endforeach
        </ul>
    </div>
    <div class="col-lg-4 other_tours">
        <ul>
            @foreach($categories->slice(6, 6) as $category)
                <li>
                    <a href="#"><i class="{{ $category->icon }}"></i>{{ ucfirst($category->libelle) }}<span class="other_tours_price">{{ $category->bonplans_count }}</span></a>
                </li>
            @endforeach
        </ul>
    </div>
    <div class="col-lg-4 other_tours">
        <ul>
            @foreach($categories->slice(12, 6) as $category)
                <li>
                    <a href="#"><i class="{{ $category->icon }}"></i>{{ ucfirst($category->libelle) }}<span class="other_tours_price">{{ $category->bonplans_count }}</span></a>
                </li>
            @endforeach
        </ul>
    </div>
</div>