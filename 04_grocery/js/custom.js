$(document).ready(function(){

	for (let i in productsdata.products) {
		$('#productArea').append(`
		<div class="itemCard" id="item${productsdata.products[i].id}">
			<div class="picSpace">
				<img src="${productsdata.products[i].image}">
			</div>
			<div class="infoSpace">
				<p class="price">€ ${productsdata.products[i].price},-</p>
				<h3>${productsdata.products[i].name}</h3>
				<p>${productsdata.products[i].info}</p>
			</div>
		</div>
		`);

		if ( parseInt(productsdata.products[i].amount) > 0 && parseInt(productsdata.products[i].amount) < 4 ) {
			$('#item' + productsdata.products[i].id).addClass('low');
		}

		if ( parseInt(productsdata.products[i].amount) < 1 ) {
			$('#item' + productsdata.products[i].id).addClass('soldOut');
		}
	}

});