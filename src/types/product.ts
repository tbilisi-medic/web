export type ProductWithRelations = {
  id: string;
  name: string;
  slug: string;
  subtitle: string | null;
  description: string | null;
  imageUrl: string | null;
  categoryId: string;
  subcategoryId: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  category: {
    id: string;
    nameKa: string;
    nameEn: string;
  };
  subcategory: {
    id: string;
    nameKa: string;
    nameEn: string;
  };
};

export type CategoryWithSubcategories = {
  id: string;
  nameKa: string;
  nameEn: string;
  subcategories: {
    id: string;
    nameKa: string;
    nameEn: string;
  }[];
};
