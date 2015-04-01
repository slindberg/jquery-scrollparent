jQuery.fn.scrollParent = function() {
  var overflowRegex = /(auto|scroll)/,
  position = this.css( "position" ),
  excludeStaticParent = position === "absolute",
  scrollParent = this.parents().filter( function() {
    var parent = $( this );
    if ( excludeStaticParent && parent.css( "position" ) === "static" ) {
      return false;
    }
    return (overflowRegex).test( parent.css( "overflow" ) + parent.css( "overflow-y" ) + parent.css( "overflow-x" ) );
  }).eq( 0 );

  return position === "fixed" || !scrollParent.length ? $( this[ 0 ].ownerDocument || document ) : scrollParent;
};
