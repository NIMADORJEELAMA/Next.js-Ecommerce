// "use client";

import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import { WixClientContext } from "@/context/wixContext";
import { useWixClient } from "@/hooks/useWixClient";
import { Suspense, useContext, useEffect } from "react";
import { wixClientServer } from "@/lib/wixClientServer";
import Skeleton from "@/components/Skeleton";

const HomePage = async () => {
  // const wixClient = useWixClient();
  // console.log("wixClient" , wixClient);

  // useEffect(()=> {
  //   const getProducts = async() => {
  //     const res = await wixClient.products.queryProducts().find();

  //     console.log('res', res)
  //   };

  //   getProducts();
  // }, [wixClient])

  //   const wixClient = await wixClientServer();
  //   console.log('wixClient', wixClient)

  //  const res = await wixClient.products.queryProducts().find();

  //   console.log(res);

  return (
    <div>
      <Slider />

      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl mb-12">Featured Products</h1>

        <Suspense fallback={"loading"}>
          <ProductList
            categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!}
            limit={4}
          />
        </Suspense>
      </div>

      <div className="mt-24 ">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 mb-12">
          Categories
        </h1>
        <Suspense fallback={<Skeleton />}>
          <CategoryList />
        </Suspense>
      </div>

      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl mb-12">New Products</h1>
        <Suspense fallback={<Skeleton />}>
          <ProductList
            categoryId={process.env.FEATURED_PRODUCTS_NEW_CATEGORY_ID!}
            limit={4}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default HomePage;

// // "use client";

// // import CategoryList from "@/components/CategoryList";
// // import ProductList from "@/components/ProductList";
// // // import Skeleton from "@/components/Skeleton";
// // import Slider from "@/components/Slider";
// // import { WixClientContext } from "@/context/wixContext";
// // import { useWixClient } from "@/hooks/useWixClient";
// // import { wixClientServer } from "@/lib/wixClientServer";
// // import { Suspense, useContext, useEffect } from "react";

// // const HomePage = async () => {

// //   // TEST (FETCHING ON THE CLIENT COMPONENT)

// //   const wixClient = useWixClient()

// //   useEffect(() => {
// //     const getProducts = async () => {
// //       const res = await wixClient.products.queryProducts().find();

// //       console.log(res)
// //     };

// //     getProducts();
// //   }, [wixClient]);

// //   // TEST (FETCHING ON THE SERVER COMPONENT)

// //   // const wixClient = await wixClientServer();

// //   // const res = await wixClient.products.queryProducts().find();

// //   console.log(res);

// //   return (
// //     <div className="">
// //       <Slider />
// //       <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
// //         <h1 className="text-2xl">Featured Products</h1>
// //         <Suspense fallback={<Skeleton />}>
// //           {/* <ProductList
// //             categoryId={process.env.FEATURED_PRODUCTS_FEATURED_CATEGORY_ID!}
// //             limit={4}
// //           /> */}
// //         </Suspense>
// //       </div>
// //       <div className="mt-24">
// //         <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">
// //           Categories
// //         </h1>
// //         <Suspense fallback={<Skeleton />}>
// //           <CategoryList />
// //         </Suspense>
// //       </div>
// //       <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
// //         <h1 className="text-2xl">New Products</h1>
// //         <Suspense fallback={<Skeleton />}>
// //           {/* <ProductList
// //             categoryId={process.env.FEATURED_PRODUCTS_NEW_CATEGORY_ID!}
// //             limit={4}
// //           /> */}
// //         </Suspense>
// //       </div>
// //     </div>
// //   );
// // };

// // export default HomePage;

// const HomePage = async () => {
//   const wixClient = await wixClientServer();
//   const res = await wixClient.products.queryProducts().find();
//   console.log('res------', res)

//   return (
//     <div>
//       <h1>Products</h1>

//       {res.items.length > 0 ? (
//         <ul>
//           {res.items.map((product: any) => (
//             <li key={product.id}>{product.name}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>No products found.</p>
//       )}
//     </div>
//   );
// };

// export default HomePage;
