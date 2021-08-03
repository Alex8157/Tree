const button = document.getElementById( 'buttonNodes' );

button.addEventListener('click', ( ) =>
    {   
        let number = document.getElementById( 'numberNodes' ).value;
        if (parseInt(number) != number) {
            number = 0;
        }
        let tree = document.getElementById( 'tree' );
        clearTree(tree);
        makeTree(tree, number);
    }
);

function clearTree(tree) {
    while (tree.firstChild) {
        tree.removeChild(tree.lastChild);
    }
};

function makeTree(tree, number) {
    currentLevel = 0;  
    for (let currentNode = 1; currentNode <= number; currentNode++) {
        if (currentNode < 2**currentLevel) {
            let level = document.getElementById( `level${currentLevel}` );
            const node = createDomElement( `<div class='circle' id='circle${currentNode}'"><input type="text"><button class="delete" onclick="deleteMe('circle${currentNode}')">delete</button></div>` );
            level.appendChild( node );  
        } else {
            currentLevel++;
            const level = createDomElement( `<div class='level' id='level${currentLevel}'></div>` );
            tree.appendChild( level );  
            const node = createDomElement( `<div class='circle' id='circle${currentNode}'"><input type="text"><button class="delete" onclick="deleteMe('circle${currentNode}')">delete</button></div>` );
            level.appendChild( node );  
        }       
    }
    makeBeauty(number, currentLevel)
}

function makeBeauty(number, currentLevel) {
    for (let currentNumber = number; currentNumber < 2**currentLevel-1; currentNumber++) {
        let level = document.getElementById( `level${currentLevel}` );
        const node = createDomElement( `<div class='emptyСircle'"></div>` );
        level.appendChild( node );   
    }
}

function deleteMe(id) {
    let node = document.getElementById( `${id}` );
    let paretnNode = node.parentNode;
    let newNode = createDomElement( `<div class='emptyСircle'"></div>` );
    paretnNode.replaceChild (newNode, node)
}

const createDomElement = ( html ) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString( html, 'text/html');
    return doc.body.children[ 0 ];
};