document.addEventListener( "DOMContentLoaded", async () => {
    const button = document.getElementById( 'buttonNodes' );
    button.addEventListener('click', ( ) => {   
            const number = document.getElementById( 'numberNodes' ).value;
            const tree = document.getElementById( 'tree' );
            clearTree(tree);
            makeTree(tree, number);
        }
    );
});

function clearTree(tree) {
    tree.innerHTML = '';
};

function makeTree(tree, number) {
    let currentLevel = 0;  
    for (let currentNode = 1; currentNode <= number; currentNode++) {
        var level = document.getElementById( `level${currentLevel}` ); 
        if (currentNode >= 2**currentLevel) {
            currentLevel++;
            var level = createDomElement( `<div class='level' id='level${currentLevel}'></div>` );
            tree.appendChild( level );  
        }
        const node = createDomElement( `<div class='circle' id='circle${currentNode}'><input type="text"><button class="delete" onclick="deleteMe('circle${currentNode}')">delete</button></div>` );
        level.appendChild( node );
    }
    makeBeauty(number, currentLevel)
}

function makeBeauty(number, currentLevel) {
    for (let currentNumber = number; currentNumber < 2**currentLevel-1; currentNumber++) {
        const level = document.getElementById( `level${currentLevel}` );
        const node = createDomElement( `<div class='emptyСircle''></div>` );
        level.appendChild( node );   
    }
}

function deleteMe(id) {
    const node = document.getElementById( `${id}` );
    const paretnNode = node.parentNode;
    const newNode = createDomElement( `<div class='emptyСircle''></div>` );
    paretnNode.replaceChild (newNode, node)
}

const createDomElement = ( html ) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString( html, 'text/html');
    return doc.body.children[ 0 ];
};