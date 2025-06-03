"use client";
import { useState } from "react";
import {
  IDocumentDocumentList,
  IDocumentRoot,
} from "@/Interface/document.interface";
import DocumentCard from "./DocumentCard";
import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import CustomPagination from "@/components/CustomPagination";

interface Props {
  documentData: IDocumentRoot;
}

const DocumentPage: React.FC<Props> = ({ documentData }) => {
  const categories = documentData?.results || [];

  // For Category name and slug
  const handleCategoryClick = (categoryName: {
    name: string;
    sub_ctg_slug: string;
  }) => {
    setSelectedCategory(categoryName.name);
    setSlug(categoryName.sub_ctg_slug);
  };

  // Retriving slug
  const [slug, setSlug] = useState<string>(
    documentData?.results[0]?.sub_ctg_slug
  );

  // for mapping categoryDocumentData
  const { data: categoryDocumentData } = useGetDataQuery({
    url: `${endpoints.categoryDetail}/${slug}/`,
  });

  // For Selected Category
  const [selectedCategory, setSelectedCategory] = useState(
    categories[0]?.name || ""
  );

  // For Pagination
  const PER_PAGE = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = categoryDocumentData?.document_list.length;
  const pageCount = Math.ceil(totalItems / PER_PAGE);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto py-[2.5rem] px-[1rem] lg:px-[3.12rem] rounded-[0.65rem] bg-background-100 my-[1.5rem] lg:my-[2.5rem]">
      <h1 className="typography-h3 text-text-500 font-semibold mb-4 lg:mb-8">
        {selectedCategory}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 lg:gap-10">
        {/* Sidebar */}
        <div className="bg-[#EEF8FF] rounded-[0.25rem] p-[1.25rem]">
          <h2 className="typography-p-large text-text-500 font-semibold mb-[1.25rem]">
            Laws & Regulations
          </h2>

          <nav className="flex flex-col space-y-2">
            {categories.map((category, idx) => (
              <button
                key={idx}
                onClick={() => handleCategoryClick(category)}
                className={`py-3 px-4 text-left rounded-md transition-colors ${
                  selectedCategory === category.name
                    ? "bg-blue-300 text-white"
                    : "bg-white hover:bg-blue-100 "
                }`}
              >
                {category.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Document Listings */}
        <div className="md:col-span-3 space-y-[0.62rem]">
          {categoryDocumentData?.document_list.map(
            (doc: IDocumentDocumentList) => (
              <DocumentCard
                key={doc.id}
                title={doc.title}
                date={doc?.created_at}
                slug={doc?.slug}
              />
            )
          )}
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-6">
        <CustomPagination
          currentPage={currentPage}
          pageCount={pageCount}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default DocumentPage;
