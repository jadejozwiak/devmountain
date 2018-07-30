describe( "practice.js", () => {

	describe( "let", () => {
		describe( "inner", () => {
			it( "should be locally scoped", () => {
				expect( typeof inner ).toBe( "undefined" );
			} );
		} );
	} );

	describe( "const", () => {
		describe( "noChange", () => {
			it( "should not be re-assignable", () => {
				expect( () => noChange = 0 ).toThrow();
			} );
		} );

		describe( "vocab", () => {
			it( "allows modifications of data structures", () => {
				expect( vocab ).toEqual( [ "let", "const", "destructuring", "spread", "rest", "arrow function" ] );
			} );
		} );
	} );

	describe( "template strings", () => {
		it( "should be defined", () => {
			expect( first ).toBeDefined();
			expect( last ).toBeDefined();
			expect( fullName ).toBeDefined();
		} );

		it( "should join strings", () => {
			expect( fullName ).toBe( first + " " + last );
		} );
	} );

	describe( "objects", () => {
		describe( "me", () => {
			it( "should contain the correct values", () => {
				expect( me.first ).toBe( first );
				expect( me.last ).toBe( last );
				expect( me.lovesDevMountain ).toBe( true );
			} );

			it( "should have a method 'learnES6'", () => {
				expect( me.learnES6 ).toBeDefined();
			} );
		} );

		describe( "flipped", () => {
			it( "should have flipped values", () => {
				expect( flipped[ first ] ).toBe( "first" );
				expect( flipped[ last ] ).toBe( "last" );
			} );
		} );
	} );

	describe( "assignment destructuring", () => {
		describe( "objects, arrays", () => {
			it( "should match the values from the destructuring object", () => {
				expect( arrays ).toBe( true );
				expect( objects ).toBe( true );
				expect( destructuring ).toEqual( {
					objects: true
					, arrays: true
					, numbers: false
				} );
			} );
		} );

		describe( "first, last, everythingElse", () => {
			it( "should contain values from the vocabAgain array", () => {
				expect( notVar ).toBe( "let" );
				expect( alsoNotVar ).toBe( "const" );
				expect( everythingElse ).toEqual( [ "destructuring", "spread", "rest", "arrow function" ] );
			} );
		} );
	} );

	describe( "spread operator", () => {
		describe( "oneThroughTen", () => {
			it( "should contain the numbers one through ten", () => {
				expect( oneThroughTen ).toEqual( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] );
			} );
		} );

		describe( "whatToUse", () => {
			it( "should return 'es6'", () => {
				expect( currentJS ).toBe( "es6" );
			} );
		})
	} );

	describe( "default params", () => {
		describe( "greeter", () => {
			it( "should return Hi Anonymous! if no name is passed", () => {
				expect( greeter() ).toBe( "Hi Anonymous!" );
			} );

			it( "should still allow for a name to be passed", () => {
				expect( greeter( "John Doe" ) ).toBe( "Hi John Doe!" );
			} );
		} );

		describe( "toPower", () => {
			it( "should handle two arguments", () => {
				expect( toPower( 3, 2 ) ).toBe( 9 );
				expect( toPower( 2, 3 ) ).toBe( 8 );
			} );

			it( "should square by default", () => {
				expect( toPower( 2 ) ).toBe( 4 );
				expect( toPower( 4 ) ).toBe( 16 );
			} );
		} );
	} );

	describe( "rest params", () => {
		describe( "evenOdd", () => {
			it( "handles any number of parameters", () => {
				expect( evenOdd( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ) ).toEqual( {
					even: [ 2, 4, 6, 8, 10 ]
					, odd: [ 1, 3, 5, 7, 9 ]
				} );

				expect( evenOdd( 1, 3, 5, 7, 9 ) ).toEqual( {
					even: []
					, odd: [ 1, 3, 5, 7, 9 ]
				} );

				expect( evenOdd() ).toEqual( { even: [], odd: [] } );
			} );
		} );

		describe( "multiply", () => {
			it( "multiplies each additional arg by the first number", () => {
				expect( multiply( 4, 12, 1, 0, 4 ) ).toEqual( [ 48, 4, 0, 16 ] );
				expect( multiply( 1, 2 ) ).toEqual( [ 2 ] );
			} );
		} );
	} );

	describe( "arrow functions", () => {
		describe( "mooresBits", () => {
			it( "should be double the bits array", () => {
				expect( mooresBits ).toEqual( [ 4, 8, 16, 32, 64, 128, 256 ] );
			} );
		} );

		describe( "that", () => {
			it( "does not create a new binding of this", () => {
				expect( that.arrow() ).toBe( window );
			} );
		} );
	} );

} );
